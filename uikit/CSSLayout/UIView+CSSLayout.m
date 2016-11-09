/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "UIView+CSSLayout.h"

#import <objc/runtime.h>

@interface CSSNodeBridge : NSObject
@property (nonatomic, assign, readonly) CSSNodeRef cnode;
@end

@implementation CSSNodeBridge
- (instancetype)init
{
  if ([super init]) {
    _cnode = CSSNodeNew();
  }

  return self;
}

- (void)dealloc
{
  CSSNodeFree(_cnode);
}
@end

@implementation UIView (CSSLayout)

- (CSSNodeRef)cssNode
{
  CSSNodeBridge *node = objc_getAssociatedObject(self, @selector(cssNode));
  if (!node) {
    node = [CSSNodeBridge new];
    CSSNodeSetContext(node.cnode, (__bridge void *) self);
    objc_setAssociatedObject(self, @selector(cssNode), node, OBJC_ASSOCIATION_RETAIN_NONATOMIC);
  }

  return node.cnode;
}

- (void)css_setUsesFlexbox:(BOOL)enabled
{
  objc_setAssociatedObject(
    self,
    @selector(css_usesFlexbox),
    @(enabled),
    OBJC_ASSOCIATION_RETAIN_NONATOMIC);
}

- (BOOL)css_usesFlexbox
{
  NSNumber *usesFlexbox = objc_getAssociatedObject(self, @selector(css_usesFlexbox));
  return [usesFlexbox boolValue];
}

- (void)css_setDirection:(CSSDirection)direction
{
  CSSNodeStyleSetDirection([self cssNode], direction);
}

- (void)css_setFlexDirection:(CSSFlexDirection)flexDirection
{
  CSSNodeStyleSetFlexDirection([self cssNode], flexDirection);
}

- (void)css_setJustifyContent:(CSSJustify)justifyContent
{
  CSSNodeStyleSetJustifyContent([self cssNode], justifyContent);
}

- (void)css_setAlignContent:(CSSAlign)alignContent
{
  CSSNodeStyleSetAlignContent([self cssNode], alignContent);
}

- (void)css_setAlignItems:(CSSAlign)alignItems
{
  CSSNodeStyleSetAlignItems([self cssNode], alignItems);
}

- (void)css_setAlignSelf:(CSSAlign)alignSelf
{
  CSSNodeStyleSetAlignSelf([self cssNode], alignSelf);
}

- (void)css_setPositionType:(CSSPositionType)positionType
{
  CSSNodeStyleSetPositionType([self cssNode], positionType);
}

- (void)css_setFlexWrap:(CSSWrapType)flexWrap
{
  CSSNodeStyleSetFlexWrap([self cssNode], flexWrap);
}

- (void)css_setFlexGrow:(CGFloat)flexGrow
{
  CSSNodeStyleSetFlexGrow([self cssNode], flexGrow);
}

- (void)css_setFlexShrink:(CGFloat)flexShrink
{
  CSSNodeStyleSetFlexShrink([self cssNode], flexShrink);
}

- (void)css_setFlexBasis:(CGFloat)flexBasis
{
  CSSNodeStyleSetFlexBasis([self cssNode], flexBasis);
}

- (void)css_setPosition:(CGFloat)position forEdge:(CSSEdge)edge
{
  CSSNodeStyleSetPosition([self cssNode], edge, position);
}

- (void)css_setMargin:(CGFloat)margin forEdge:(CSSEdge)edge
{
  CSSNodeStyleSetMargin([self cssNode], edge, margin);
}

- (void)css_setPadding:(CGFloat)padding forEdge:(CSSEdge)edge
{
  CSSNodeStyleSetPadding([self cssNode], edge, padding);
}

- (void)css_setWidth:(CGFloat)width
{
  CSSNodeStyleSetWidth([self cssNode], width);
}

- (void)css_setHeight:(CGFloat)height
{
  CSSNodeStyleSetHeight([self cssNode], height);
}

- (void)css_setMinWidth:(CGFloat)minWidth
{
  CSSNodeStyleSetMinWidth([self cssNode], minWidth);
}

- (void)css_setMinHeight:(CGFloat)minHeight
{
  CSSNodeStyleSetMinHeight([self cssNode], minHeight);
}

- (void)css_setMaxWidth:(CGFloat)maxWidth
{
  CSSNodeStyleSetMaxWidth([self cssNode], maxWidth);
}

- (void)css_setMaxHeight:(CGFloat)maxHeight
{
  CSSNodeStyleSetMaxHeight([self cssNode], maxHeight);
}

- (CSSDirection)css_resolvedDirection
{
  return CSSNodeLayoutGetDirection([self cssNode]);
}

- (CGSize)css_sizeThatFits:(CGSize)constrainedSize
{
  NSAssert([NSThread isMainThread], @"CSS Layout calculation must be done on main.");
  NSAssert([self css_usesFlexbox], @"CSS Layout is not enabled for this view.");

  _attachNodesRecursive(self);

  const CSSNodeRef node = [self cssNode];
  CSSNodeCalculateLayout(
    node,
    constrainedSize.width,
    constrainedSize.height,
    CSSNodeStyleGetDirection(node));

  return (CGSize) {
    .width = CSSNodeLayoutGetWidth(node),
    .height = CSSNodeLayoutGetHeight(node),
  };
}

- (void)css_applyLayout
{
  [self css_sizeThatFits:self.bounds.size];
  _updateFrameRecursive(self);
}

#pragma mark - Private

static CSSSize _measure(
  CSSNodeRef node,
  float width,
  CSSMeasureMode widthMode,
  float height,
  CSSMeasureMode heightMode)
{
  const CGFloat constrainedWidth = (widthMode == CSSMeasureModeUndefined) ? CGFLOAT_MAX : width;
  const CGFloat constrainedHeight = (heightMode == CSSMeasureModeUndefined) ? CGFLOAT_MAX: height;

  UIView *view = (__bridge UIView*) CSSNodeGetContext(node);
  const CGSize sizeThatFits = [view sizeThatFits:(CGSize) {
    .width = constrainedWidth,
    .height = constrainedHeight,
  }];

  return (CSSSize) {
    .width = _sanitizeMeasurement(constrainedWidth, sizeThatFits.width, widthMode),
    .height = _sanitizeMeasurement(constrainedHeight, sizeThatFits.height, heightMode),
  };
}

static CGFloat _sanitizeMeasurement(
  CGFloat constrainedSize,
  CGFloat measuredSize,
  CSSMeasureMode measureMode)
{
  CGFloat result;
  if (measureMode == CSSMeasureModeExactly) {
    result = constrainedSize;
  } else if (measureMode == CSSMeasureModeAtMost) {
    result = MIN(constrainedSize, measuredSize);
  } else {
    result = measuredSize;
  }

  return result;
}

static void _attachNodesRecursive(UIView *view) {
  CSSNodeRef node = [view cssNode];
  const BOOL usesFlexbox = [view css_usesFlexbox];
  const BOOL isLeaf = !usesFlexbox || view.subviews.count == 0;

  // Only leaf nodes should have a measure function
  if (isLeaf) {
    CSSNodeSetMeasureFunc(node, _measure);

    // Clear any children
    while (CSSNodeChildCount(node) > 0) {
      CSSNodeRemoveChild(node, CSSNodeGetChild(node, 0));
    }
  } else {
    CSSNodeSetMeasureFunc(node, NULL);

    // Add any children which were added since the last call to css_applyLayout
    for (NSUInteger i = 0; i < view.subviews.count; i++) {
      CSSNodeRef childNode = [view.subviews[i] cssNode];
      if (CSSNodeChildCount(node) < i + 1 || CSSNodeGetChild(node, i) != childNode) {
        CSSNodeInsertChild(node, childNode, i);
      }
      _attachNodesRecursive(view.subviews[i]);
    }

    // Remove any children which were removed since the last call to css_applyLayout
    while (view.subviews.count < CSSNodeChildCount(node)) {
      CSSNodeRemoveChild(node, CSSNodeGetChild(node, CSSNodeChildCount(node) - 1));
    }
  }
}

static CGFloat _roundPixelValue(CGFloat value)
{
  static CGFloat scale;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^(){
    scale = [UIScreen mainScreen].scale;
  });

  return round(value * scale) / scale;
}

static void _updateFrameRecursive(UIView *view) {
  NSCAssert([NSThread isMainThread], @"Framesetting should only be done on the main thread.");
  CSSNodeRef node = [view cssNode];

  const CGPoint topLeft = {
    CSSNodeLayoutGetLeft(node),
    CSSNodeLayoutGetTop(node),
  };

  const CGPoint bottomRight = {
    topLeft.x + CSSNodeLayoutGetWidth(node),
    topLeft.y + CSSNodeLayoutGetHeight(node),
  };

  view.frame = (CGRect) {
    .origin = {
      .x = _roundPixelValue(topLeft.x),
      .y = _roundPixelValue(topLeft.y),
    },
    .size = {
      .width = _roundPixelValue(bottomRight.x) - _roundPixelValue(topLeft.x),
      .height = _roundPixelValue(bottomRight.y) - _roundPixelValue(topLeft.y),
    },
  };

  const BOOL isLeaf = ![view css_usesFlexbox] || view.subviews.count == 0;
  if (!isLeaf) {
    for (NSUInteger i = 0; i < view.subviews.count; i++) {
      _updateFrameRecursive(view.subviews[i]);
    }
  }
}

@end
