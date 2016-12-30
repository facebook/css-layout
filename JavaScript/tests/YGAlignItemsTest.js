/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

 // @Generated by gentest/gentest.rb from gentest/fixtures/YGAlignItemsTest.html

var include = require('./include.js');
include.include('../src/YGEnums.js');
include.include('../src/Yoga.js');

describe('YGAlignItemsTest', () => {

  it('align_items_stretch', () => {
    var root = _YGNodeNew();
    _YGNodeStyleSetWidth(root, 100);
    _YGNodeStyleSetHeight(root, 100);

    var root_child0 = _YGNodeNew();
    _YGNodeStyleSetHeight(root_child0, 10);
    _YGNodeInsertChild(root, root_child0, 0);
    _YGNodeCalculateLayout(root, _YGUndefined, _YGUndefined, _YGDirectionLTR);

    expect(_YGNodeLayoutGetLeft(root)).toBe(0);
    expect(_YGNodeLayoutGetTop(root)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root)).toBe(100);
    expect(_YGNodeLayoutGetHeight(root)).toBe(100);

    expect(_YGNodeLayoutGetLeft(root_child0)).toBe(0);
    expect(_YGNodeLayoutGetTop(root_child0)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root_child0)).toBe(100);
    expect(_YGNodeLayoutGetHeight(root_child0)).toBe(10);

    _YGNodeCalculateLayout(root, _YGUndefined, _YGUndefined, _YGDirectionRTL);

    expect(_YGNodeLayoutGetLeft(root)).toBe(0);
    expect(_YGNodeLayoutGetTop(root)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root)).toBe(100);
    expect(_YGNodeLayoutGetHeight(root)).toBe(100);

    expect(_YGNodeLayoutGetLeft(root_child0)).toBe(0);
    expect(_YGNodeLayoutGetTop(root_child0)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root_child0)).toBe(100);
    expect(_YGNodeLayoutGetHeight(root_child0)).toBe(10);

    _YGNodeFreeRecursive(root);
  });

  it('align_items_center', () => {
    var root = _YGNodeNew();
    _YGNodeStyleSetAlignItems(root, _YGAlignCenter);
    _YGNodeStyleSetWidth(root, 100);
    _YGNodeStyleSetHeight(root, 100);

    var root_child0 = _YGNodeNew();
    _YGNodeStyleSetWidth(root_child0, 10);
    _YGNodeStyleSetHeight(root_child0, 10);
    _YGNodeInsertChild(root, root_child0, 0);
    _YGNodeCalculateLayout(root, _YGUndefined, _YGUndefined, _YGDirectionLTR);

    expect(_YGNodeLayoutGetLeft(root)).toBe(0);
    expect(_YGNodeLayoutGetTop(root)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root)).toBe(100);
    expect(_YGNodeLayoutGetHeight(root)).toBe(100);

    expect(_YGNodeLayoutGetLeft(root_child0)).toBe(45);
    expect(_YGNodeLayoutGetTop(root_child0)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root_child0)).toBe(10);
    expect(_YGNodeLayoutGetHeight(root_child0)).toBe(10);

    _YGNodeCalculateLayout(root, _YGUndefined, _YGUndefined, _YGDirectionRTL);

    expect(_YGNodeLayoutGetLeft(root)).toBe(0);
    expect(_YGNodeLayoutGetTop(root)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root)).toBe(100);
    expect(_YGNodeLayoutGetHeight(root)).toBe(100);

    expect(_YGNodeLayoutGetLeft(root_child0)).toBe(45);
    expect(_YGNodeLayoutGetTop(root_child0)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root_child0)).toBe(10);
    expect(_YGNodeLayoutGetHeight(root_child0)).toBe(10);

    _YGNodeFreeRecursive(root);
  });

  it('align_items_flex_start', () => {
    var root = _YGNodeNew();
    _YGNodeStyleSetAlignItems(root, _YGAlignFlexStart);
    _YGNodeStyleSetWidth(root, 100);
    _YGNodeStyleSetHeight(root, 100);

    var root_child0 = _YGNodeNew();
    _YGNodeStyleSetWidth(root_child0, 10);
    _YGNodeStyleSetHeight(root_child0, 10);
    _YGNodeInsertChild(root, root_child0, 0);
    _YGNodeCalculateLayout(root, _YGUndefined, _YGUndefined, _YGDirectionLTR);

    expect(_YGNodeLayoutGetLeft(root)).toBe(0);
    expect(_YGNodeLayoutGetTop(root)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root)).toBe(100);
    expect(_YGNodeLayoutGetHeight(root)).toBe(100);

    expect(_YGNodeLayoutGetLeft(root_child0)).toBe(0);
    expect(_YGNodeLayoutGetTop(root_child0)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root_child0)).toBe(10);
    expect(_YGNodeLayoutGetHeight(root_child0)).toBe(10);

    _YGNodeCalculateLayout(root, _YGUndefined, _YGUndefined, _YGDirectionRTL);

    expect(_YGNodeLayoutGetLeft(root)).toBe(0);
    expect(_YGNodeLayoutGetTop(root)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root)).toBe(100);
    expect(_YGNodeLayoutGetHeight(root)).toBe(100);

    expect(_YGNodeLayoutGetLeft(root_child0)).toBe(90);
    expect(_YGNodeLayoutGetTop(root_child0)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root_child0)).toBe(10);
    expect(_YGNodeLayoutGetHeight(root_child0)).toBe(10);

    _YGNodeFreeRecursive(root);
  });

  it('align_items_flex_end', () => {
    var root = _YGNodeNew();
    _YGNodeStyleSetAlignItems(root, _YGAlignFlexEnd);
    _YGNodeStyleSetWidth(root, 100);
    _YGNodeStyleSetHeight(root, 100);

    var root_child0 = _YGNodeNew();
    _YGNodeStyleSetWidth(root_child0, 10);
    _YGNodeStyleSetHeight(root_child0, 10);
    _YGNodeInsertChild(root, root_child0, 0);
    _YGNodeCalculateLayout(root, _YGUndefined, _YGUndefined, _YGDirectionLTR);

    expect(_YGNodeLayoutGetLeft(root)).toBe(0);
    expect(_YGNodeLayoutGetTop(root)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root)).toBe(100);
    expect(_YGNodeLayoutGetHeight(root)).toBe(100);

    expect(_YGNodeLayoutGetLeft(root_child0)).toBe(90);
    expect(_YGNodeLayoutGetTop(root_child0)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root_child0)).toBe(10);
    expect(_YGNodeLayoutGetHeight(root_child0)).toBe(10);

    _YGNodeCalculateLayout(root, _YGUndefined, _YGUndefined, _YGDirectionRTL);

    expect(_YGNodeLayoutGetLeft(root)).toBe(0);
    expect(_YGNodeLayoutGetTop(root)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root)).toBe(100);
    expect(_YGNodeLayoutGetHeight(root)).toBe(100);

    expect(_YGNodeLayoutGetLeft(root_child0)).toBe(0);
    expect(_YGNodeLayoutGetTop(root_child0)).toBe(0);
    expect(_YGNodeLayoutGetWidth(root_child0)).toBe(10);
    expect(_YGNodeLayoutGetHeight(root_child0)).toBe(10);

    _YGNodeFreeRecursive(root);
  });

});
