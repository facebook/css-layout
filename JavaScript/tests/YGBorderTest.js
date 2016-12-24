/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

<<<<<<< HEAD
<<<<<<< HEAD
 // @Generated by gentest/gentest.rb from gentest/fixtures/Yoga.BorderTest.html


(function() {
  const root = Yoga.nodeNew();
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeLeft, 10);
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeTop, 10);
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeRight, 10);
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeBottom, 10);
  Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionLTR);

  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(20, Yoga.nodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(20, Yoga.nodeLayoutGetHeight(root));

  Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionRTL);

  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(20, Yoga.nodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(20, Yoga.nodeLayoutGetHeight(root));

  Yoga.nodeFreeRecursive(root);
})();

(function() {
  const root = Yoga.nodeNew();
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeLeft, 10);
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeTop, 10);
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeRight, 10);
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeBottom, 10);

  const root_child0 = Yoga.nodeNew();
  Yoga.nodeStyleSetWidth(root_child0, 10);
  Yoga.nodeStyleSetHeight(root_child0, 10);
  Yoga.nodeInsertChild(root, root_child0, 0);
  Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionLTR);

  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(30, Yoga.nodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(30, Yoga.nodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetHeight(root_child0));

  Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionRTL);

  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(30, Yoga.nodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(30, Yoga.nodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetHeight(root_child0));

  Yoga.nodeFreeRecursive(root);
})();

(function() {
  const root = Yoga.nodeNew();
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeLeft, 10);
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeTop, 10);
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeRight, 10);
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeBottom, 10);
  Yoga.nodeStyleSetWidth(root, 100);
  Yoga.nodeStyleSetHeight(root, 100);

  const root_child0 = Yoga.nodeNew();
  Yoga.nodeStyleSetFlexGrow(root_child0, 1);
  Yoga.nodeStyleSetWidth(root_child0, 10);
  Yoga.nodeInsertChild(root, root_child0, 0);
  Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionLTR);

  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(100, Yoga.nodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(100, Yoga.nodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(80, Yoga.nodeLayoutGetHeight(root_child0));

  Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionRTL);

  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(100, Yoga.nodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(100, Yoga.nodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(80, Yoga.nodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(80, Yoga.nodeLayoutGetHeight(root_child0));

  Yoga.nodeFreeRecursive(root);
})();

(function() {
  const root = Yoga.nodeNew();
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeLeft, 10);
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeTop, 10);
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeRight, 10);
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeBottom, 10);
  Yoga.nodeStyleSetWidth(root, 100);
  Yoga.nodeStyleSetHeight(root, 100);

  const root_child0 = Yoga.nodeNew();
  Yoga.nodeStyleSetHeight(root_child0, 10);
  Yoga.nodeInsertChild(root, root_child0, 0);
  Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionLTR);

  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(100, Yoga.nodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(100, Yoga.nodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(80, Yoga.nodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetHeight(root_child0));

  Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionRTL);

  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(100, Yoga.nodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(100, Yoga.nodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(80, Yoga.nodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetHeight(root_child0));

  Yoga.nodeFreeRecursive(root);
})();

(function() {
  const root = Yoga.nodeNew();
  Yoga.nodeStyleSetJustifyContent(root, Yoga.JustifyCenter);
  Yoga.nodeStyleSetAlignItems(root, Yoga.AlignCenter);
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeStart, 10);
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeEnd, 20);
  Yoga.nodeStyleSetBorder(root, Yoga.EdgeBottom, 20);
  Yoga.nodeStyleSetWidth(root, 100);
  Yoga.nodeStyleSetHeight(root, 100);

  const root_child0 = Yoga.nodeNew();
  Yoga.nodeStyleSetWidth(root_child0, 10);
  Yoga.nodeStyleSetHeight(root_child0, 10);
  Yoga.nodeInsertChild(root, root_child0, 0);
  Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionLTR);

  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(100, Yoga.nodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(100, Yoga.nodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(40, Yoga.nodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(35, Yoga.nodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetHeight(root_child0));

  Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionRTL);

  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, Yoga.nodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(100, Yoga.nodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(100, Yoga.nodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(50, Yoga.nodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(35, Yoga.nodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(10, Yoga.nodeLayoutGetHeight(root_child0));

  Yoga.nodeFreeRecursive(root);
})();
=======
=======
>>>>>>> splhack-gentest-js
 // @Generated by gentest/gentest.rb from gentest/fixtures/YGBorderTest.html

var Yoga = Yoga || require('../src/Yoga.js');

describe('YGBorderTest', () => {

  it('border_no_size', () => {
    var root = Yoga.nodeNew();
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeLeft, 10);
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeTop, 10);
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeRight, 10);
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeBottom, 10);
    Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionLTR);

    expect(Yoga.nodeLayoutGetLeft(root)).toBe(0);
    expect(Yoga.nodeLayoutGetTop(root)).toBe(0);
    expect(Yoga.nodeLayoutGetWidth(root)).toBe(20);
    expect(Yoga.nodeLayoutGetHeight(root)).toBe(20);

    Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionRTL);

    expect(Yoga.nodeLayoutGetLeft(root)).toBe(0);
    expect(Yoga.nodeLayoutGetTop(root)).toBe(0);
    expect(Yoga.nodeLayoutGetWidth(root)).toBe(20);
    expect(Yoga.nodeLayoutGetHeight(root)).toBe(20);

    Yoga.nodeFreeRecursive(root);
  });

  it('border_container_match_child', () => {
    var root = Yoga.nodeNew();
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeLeft, 10);
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeTop, 10);
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeRight, 10);
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeBottom, 10);

    var root_child0 = Yoga.nodeNew();
    Yoga.nodeStyleSetWidth(root_child0, 10);
    Yoga.nodeStyleSetHeight(root_child0, 10);
    Yoga.nodeInsertChild(root, root_child0, 0);
    Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionLTR);

    expect(Yoga.nodeLayoutGetLeft(root)).toBe(0);
    expect(Yoga.nodeLayoutGetTop(root)).toBe(0);
    expect(Yoga.nodeLayoutGetWidth(root)).toBe(30);
    expect(Yoga.nodeLayoutGetHeight(root)).toBe(30);

    expect(Yoga.nodeLayoutGetLeft(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetTop(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetWidth(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetHeight(root_child0)).toBe(10);

    Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionRTL);

    expect(Yoga.nodeLayoutGetLeft(root)).toBe(0);
    expect(Yoga.nodeLayoutGetTop(root)).toBe(0);
    expect(Yoga.nodeLayoutGetWidth(root)).toBe(30);
    expect(Yoga.nodeLayoutGetHeight(root)).toBe(30);

    expect(Yoga.nodeLayoutGetLeft(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetTop(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetWidth(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetHeight(root_child0)).toBe(10);

    Yoga.nodeFreeRecursive(root);
  });

  it('border_flex_child', () => {
    var root = Yoga.nodeNew();
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeLeft, 10);
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeTop, 10);
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeRight, 10);
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeBottom, 10);
    Yoga.nodeStyleSetWidth(root, 100);
    Yoga.nodeStyleSetHeight(root, 100);

    var root_child0 = Yoga.nodeNew();
    Yoga.nodeStyleSetFlexGrow(root_child0, 1);
    Yoga.nodeStyleSetWidth(root_child0, 10);
    Yoga.nodeInsertChild(root, root_child0, 0);
    Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionLTR);

    expect(Yoga.nodeLayoutGetLeft(root)).toBe(0);
    expect(Yoga.nodeLayoutGetTop(root)).toBe(0);
    expect(Yoga.nodeLayoutGetWidth(root)).toBe(100);
    expect(Yoga.nodeLayoutGetHeight(root)).toBe(100);

    expect(Yoga.nodeLayoutGetLeft(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetTop(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetWidth(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetHeight(root_child0)).toBe(80);

    Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionRTL);

    expect(Yoga.nodeLayoutGetLeft(root)).toBe(0);
    expect(Yoga.nodeLayoutGetTop(root)).toBe(0);
    expect(Yoga.nodeLayoutGetWidth(root)).toBe(100);
    expect(Yoga.nodeLayoutGetHeight(root)).toBe(100);

    expect(Yoga.nodeLayoutGetLeft(root_child0)).toBe(80);
    expect(Yoga.nodeLayoutGetTop(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetWidth(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetHeight(root_child0)).toBe(80);

    Yoga.nodeFreeRecursive(root);
  });

  it('border_stretch_child', () => {
    var root = Yoga.nodeNew();
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeLeft, 10);
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeTop, 10);
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeRight, 10);
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeBottom, 10);
    Yoga.nodeStyleSetWidth(root, 100);
    Yoga.nodeStyleSetHeight(root, 100);

    var root_child0 = Yoga.nodeNew();
    Yoga.nodeStyleSetHeight(root_child0, 10);
    Yoga.nodeInsertChild(root, root_child0, 0);
    Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionLTR);

    expect(Yoga.nodeLayoutGetLeft(root)).toBe(0);
    expect(Yoga.nodeLayoutGetTop(root)).toBe(0);
    expect(Yoga.nodeLayoutGetWidth(root)).toBe(100);
    expect(Yoga.nodeLayoutGetHeight(root)).toBe(100);

    expect(Yoga.nodeLayoutGetLeft(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetTop(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetWidth(root_child0)).toBe(80);
    expect(Yoga.nodeLayoutGetHeight(root_child0)).toBe(10);

    Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionRTL);

    expect(Yoga.nodeLayoutGetLeft(root)).toBe(0);
    expect(Yoga.nodeLayoutGetTop(root)).toBe(0);
    expect(Yoga.nodeLayoutGetWidth(root)).toBe(100);
    expect(Yoga.nodeLayoutGetHeight(root)).toBe(100);

    expect(Yoga.nodeLayoutGetLeft(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetTop(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetWidth(root_child0)).toBe(80);
    expect(Yoga.nodeLayoutGetHeight(root_child0)).toBe(10);

    Yoga.nodeFreeRecursive(root);
  });

  it('border_center_child', () => {
    var root = Yoga.nodeNew();
    Yoga.nodeStyleSetJustifyContent(root, Yoga.JustifyCenter);
    Yoga.nodeStyleSetAlignItems(root, Yoga.AlignCenter);
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeStart, 10);
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeEnd, 20);
    Yoga.nodeStyleSetBorder(root, Yoga.EdgeBottom, 20);
    Yoga.nodeStyleSetWidth(root, 100);
    Yoga.nodeStyleSetHeight(root, 100);

    var root_child0 = Yoga.nodeNew();
    Yoga.nodeStyleSetWidth(root_child0, 10);
    Yoga.nodeStyleSetHeight(root_child0, 10);
    Yoga.nodeInsertChild(root, root_child0, 0);
    Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionLTR);

    expect(Yoga.nodeLayoutGetLeft(root)).toBe(0);
    expect(Yoga.nodeLayoutGetTop(root)).toBe(0);
    expect(Yoga.nodeLayoutGetWidth(root)).toBe(100);
    expect(Yoga.nodeLayoutGetHeight(root)).toBe(100);

    expect(Yoga.nodeLayoutGetLeft(root_child0)).toBe(40);
    expect(Yoga.nodeLayoutGetTop(root_child0)).toBe(35);
    expect(Yoga.nodeLayoutGetWidth(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetHeight(root_child0)).toBe(10);

    Yoga.nodeCalculateLayout(root, Yoga.Undefined, Yoga.Undefined, Yoga.DirectionRTL);

    expect(Yoga.nodeLayoutGetLeft(root)).toBe(0);
    expect(Yoga.nodeLayoutGetTop(root)).toBe(0);
    expect(Yoga.nodeLayoutGetWidth(root)).toBe(100);
    expect(Yoga.nodeLayoutGetHeight(root)).toBe(100);

    expect(Yoga.nodeLayoutGetLeft(root_child0)).toBe(50);
    expect(Yoga.nodeLayoutGetTop(root_child0)).toBe(35);
    expect(Yoga.nodeLayoutGetWidth(root_child0)).toBe(10);
    expect(Yoga.nodeLayoutGetHeight(root_child0)).toBe(10);

    Yoga.nodeFreeRecursive(root);
  });

});
<<<<<<< HEAD
>>>>>>> origin/splhack-gentest-js
=======
>>>>>>> splhack-gentest-js
