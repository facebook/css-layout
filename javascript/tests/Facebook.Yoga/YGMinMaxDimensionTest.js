/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

 // @Generated by gentest/gentest.rb from gentest/fixtures/YGMinMaxDimensionTest.html

var Yoga = require("../../sources/entry-" + process.env.TEST_ENTRY);

it("max_width", function () {
  var root = new Yoga.Node();
  root.setWidth(100);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setMaxWidth(50);
  root_child0.setHeight(10);
  root.insertChild(root_child0, 0);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(50 === root_child0.getComputedWidth(), "50 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(50 === root_child0.getComputedLeft(), "50 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(50 === root_child0.getComputedWidth(), "50 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");
});
it("max_height", function () {
  var root = new Yoga.Node();
  root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
  root.setWidth(100);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setWidth(10);
  root_child0.setMaxHeight(50);
  root.insertChild(root_child0, 0);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(50 === root_child0.getComputedHeight(), "50 === root_child0.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(90 === root_child0.getComputedLeft(), "90 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(50 === root_child0.getComputedHeight(), "50 === root_child0.getComputedHeight()");
});
it("min_height", function () {
  var root = new Yoga.Node();
  root.setWidth(100);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setFlexGrow(1);
  root_child0.setMinHeight(60);
  root.insertChild(root_child0, 0);

  var root_child1 = new Yoga.Node();
  root_child1.setFlexGrow(1);
  root.insertChild(root_child1, 1);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth()");
  console.assert(80 === root_child0.getComputedHeight(), "80 === root_child0.getComputedHeight()");

  console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft()");
  console.assert(80 === root_child1.getComputedTop(), "80 === root_child1.getComputedTop()");
  console.assert(100 === root_child1.getComputedWidth(), "100 === root_child1.getComputedWidth()");
  console.assert(20 === root_child1.getComputedHeight(), "20 === root_child1.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth()");
  console.assert(80 === root_child0.getComputedHeight(), "80 === root_child0.getComputedHeight()");

  console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft()");
  console.assert(80 === root_child1.getComputedTop(), "80 === root_child1.getComputedTop()");
  console.assert(100 === root_child1.getComputedWidth(), "100 === root_child1.getComputedWidth()");
  console.assert(20 === root_child1.getComputedHeight(), "20 === root_child1.getComputedHeight()");
});
it("min_width", function () {
  var root = new Yoga.Node();
  root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
  root.setWidth(100);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setFlexGrow(1);
  root_child0.setMinWidth(60);
  root.insertChild(root_child0, 0);

  var root_child1 = new Yoga.Node();
  root_child1.setFlexGrow(1);
  root.insertChild(root_child1, 1);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(80 === root_child0.getComputedWidth(), "80 === root_child0.getComputedWidth()");
  console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight()");

  console.assert(80 === root_child1.getComputedLeft(), "80 === root_child1.getComputedLeft()");
  console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop()");
  console.assert(20 === root_child1.getComputedWidth(), "20 === root_child1.getComputedWidth()");
  console.assert(100 === root_child1.getComputedHeight(), "100 === root_child1.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(20 === root_child0.getComputedLeft(), "20 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(80 === root_child0.getComputedWidth(), "80 === root_child0.getComputedWidth()");
  console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight()");

  console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft()");
  console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop()");
  console.assert(20 === root_child1.getComputedWidth(), "20 === root_child1.getComputedWidth()");
  console.assert(100 === root_child1.getComputedHeight(), "100 === root_child1.getComputedHeight()");
});
it("justify_content_min_max", function () {
  var root = new Yoga.Node();
  root.setJustifyContent(Yoga.JUSTIFY_CENTER);
  root.setWidth(100);
  root.setMinHeight(100);
  root.setMaxHeight(200);

  var root_child0 = new Yoga.Node();
  root_child0.setWidth(60);
  root_child0.setHeight(60);
  root.insertChild(root_child0, 0);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(20 === root_child0.getComputedTop(), "20 === root_child0.getComputedTop()");
  console.assert(60 === root_child0.getComputedWidth(), "60 === root_child0.getComputedWidth()");
  console.assert(60 === root_child0.getComputedHeight(), "60 === root_child0.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(40 === root_child0.getComputedLeft(), "40 === root_child0.getComputedLeft()");
  console.assert(20 === root_child0.getComputedTop(), "20 === root_child0.getComputedTop()");
  console.assert(60 === root_child0.getComputedWidth(), "60 === root_child0.getComputedWidth()");
  console.assert(60 === root_child0.getComputedHeight(), "60 === root_child0.getComputedHeight()");
});
it("align_items_min_max", function () {
  var root = new Yoga.Node();
  root.setAlignItems(Yoga.ALIGN_CENTER);
  root.setMinWidth(100);
  root.setMaxWidth(200);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setWidth(60);
  root_child0.setHeight(60);
  root.insertChild(root_child0, 0);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(20 === root_child0.getComputedLeft(), "20 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(60 === root_child0.getComputedWidth(), "60 === root_child0.getComputedWidth()");
  console.assert(60 === root_child0.getComputedHeight(), "60 === root_child0.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(20 === root_child0.getComputedLeft(), "20 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(60 === root_child0.getComputedWidth(), "60 === root_child0.getComputedWidth()");
  console.assert(60 === root_child0.getComputedHeight(), "60 === root_child0.getComputedHeight()");
});
it("justify_content_overflow_min_max", function () {
  var root = new Yoga.Node();
  root.setJustifyContent(Yoga.JUSTIFY_CENTER);
  root.setMinHeight(100);
  root.setMaxHeight(110);

  var root_child0 = new Yoga.Node();
  root_child0.setWidth(50);
  root_child0.setHeight(50);
  root.insertChild(root_child0, 0);

  var root_child1 = new Yoga.Node();
  root_child1.setWidth(50);
  root_child1.setHeight(50);
  root.insertChild(root_child1, 1);

  var root_child2 = new Yoga.Node();
  root_child2.setWidth(50);
  root_child2.setHeight(50);
  root.insertChild(root_child2, 2);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(50 === root.getComputedWidth(), "50 === root.getComputedWidth()");
  console.assert(110 === root.getComputedHeight(), "110 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(-20 === root_child0.getComputedTop(), "-20 === root_child0.getComputedTop()");
  console.assert(50 === root_child0.getComputedWidth(), "50 === root_child0.getComputedWidth()");
  console.assert(50 === root_child0.getComputedHeight(), "50 === root_child0.getComputedHeight()");

  console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft()");
  console.assert(30 === root_child1.getComputedTop(), "30 === root_child1.getComputedTop()");
  console.assert(50 === root_child1.getComputedWidth(), "50 === root_child1.getComputedWidth()");
  console.assert(50 === root_child1.getComputedHeight(), "50 === root_child1.getComputedHeight()");

  console.assert(0 === root_child2.getComputedLeft(), "0 === root_child2.getComputedLeft()");
  console.assert(80 === root_child2.getComputedTop(), "80 === root_child2.getComputedTop()");
  console.assert(50 === root_child2.getComputedWidth(), "50 === root_child2.getComputedWidth()");
  console.assert(50 === root_child2.getComputedHeight(), "50 === root_child2.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(50 === root.getComputedWidth(), "50 === root.getComputedWidth()");
  console.assert(110 === root.getComputedHeight(), "110 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(-20 === root_child0.getComputedTop(), "-20 === root_child0.getComputedTop()");
  console.assert(50 === root_child0.getComputedWidth(), "50 === root_child0.getComputedWidth()");
  console.assert(50 === root_child0.getComputedHeight(), "50 === root_child0.getComputedHeight()");

  console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft()");
  console.assert(30 === root_child1.getComputedTop(), "30 === root_child1.getComputedTop()");
  console.assert(50 === root_child1.getComputedWidth(), "50 === root_child1.getComputedWidth()");
  console.assert(50 === root_child1.getComputedHeight(), "50 === root_child1.getComputedHeight()");

  console.assert(0 === root_child2.getComputedLeft(), "0 === root_child2.getComputedLeft()");
  console.assert(80 === root_child2.getComputedTop(), "80 === root_child2.getComputedTop()");
  console.assert(50 === root_child2.getComputedWidth(), "50 === root_child2.getComputedWidth()");
  console.assert(50 === root_child2.getComputedHeight(), "50 === root_child2.getComputedHeight()");
});
it("flex_grow_within_max_width", function () {
  var root = new Yoga.Node();
  root.setWidth(200);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
  root_child0.setMaxWidth(100);
  root.insertChild(root_child0, 0);

  var root_child0_child0 = new Yoga.Node();
  root_child0_child0.setFlexGrow(1);
  root_child0_child0.setHeight(20);
  root_child0.insertChild(root_child0_child0, 0);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth()");
  console.assert(20 === root_child0.getComputedHeight(), "20 === root_child0.getComputedHeight()");

  console.assert(0 === root_child0_child0.getComputedLeft(), "0 === root_child0_child0.getComputedLeft()");
  console.assert(0 === root_child0_child0.getComputedTop(), "0 === root_child0_child0.getComputedTop()");
  console.assert(100 === root_child0_child0.getComputedWidth(), "100 === root_child0_child0.getComputedWidth()");
  console.assert(20 === root_child0_child0.getComputedHeight(), "20 === root_child0_child0.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(100 === root_child0.getComputedLeft(), "100 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth()");
  console.assert(20 === root_child0.getComputedHeight(), "20 === root_child0.getComputedHeight()");

  console.assert(0 === root_child0_child0.getComputedLeft(), "0 === root_child0_child0.getComputedLeft()");
  console.assert(0 === root_child0_child0.getComputedTop(), "0 === root_child0_child0.getComputedTop()");
  console.assert(100 === root_child0_child0.getComputedWidth(), "100 === root_child0_child0.getComputedWidth()");
  console.assert(20 === root_child0_child0.getComputedHeight(), "20 === root_child0_child0.getComputedHeight()");
});
it("flex_grow_within_constrained_max_width", function () {
  var root = new Yoga.Node();
  root.setWidth(200);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
  root_child0.setMaxWidth(300);
  root.insertChild(root_child0, 0);

  var root_child0_child0 = new Yoga.Node();
  root_child0_child0.setFlexGrow(1);
  root_child0_child0.setHeight(20);
  root_child0.insertChild(root_child0_child0, 0);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(200 === root_child0.getComputedWidth(), "200 === root_child0.getComputedWidth()");
  console.assert(20 === root_child0.getComputedHeight(), "20 === root_child0.getComputedHeight()");

  console.assert(0 === root_child0_child0.getComputedLeft(), "0 === root_child0_child0.getComputedLeft()");
  console.assert(0 === root_child0_child0.getComputedTop(), "0 === root_child0_child0.getComputedTop()");
  console.assert(200 === root_child0_child0.getComputedWidth(), "200 === root_child0_child0.getComputedWidth()");
  console.assert(20 === root_child0_child0.getComputedHeight(), "20 === root_child0_child0.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(200 === root_child0.getComputedWidth(), "200 === root_child0.getComputedWidth()");
  console.assert(20 === root_child0.getComputedHeight(), "20 === root_child0.getComputedHeight()");

  console.assert(0 === root_child0_child0.getComputedLeft(), "0 === root_child0_child0.getComputedLeft()");
  console.assert(0 === root_child0_child0.getComputedTop(), "0 === root_child0_child0.getComputedTop()");
  console.assert(200 === root_child0_child0.getComputedWidth(), "200 === root_child0_child0.getComputedWidth()");
  console.assert(20 === root_child0_child0.getComputedHeight(), "20 === root_child0_child0.getComputedHeight()");
});
it("flex_grow_within_constrained_min_row", function () {
  var root = new Yoga.Node();
  root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
  root.setMinWidth(100);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setFlexGrow(1);
  root.insertChild(root_child0, 0);

  var root_child1 = new Yoga.Node();
  root_child1.setWidth(50);
  root.insertChild(root_child1, 1);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(50 === root_child0.getComputedWidth(), "50 === root_child0.getComputedWidth()");
  console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight()");

  console.assert(50 === root_child1.getComputedLeft(), "50 === root_child1.getComputedLeft()");
  console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop()");
  console.assert(50 === root_child1.getComputedWidth(), "50 === root_child1.getComputedWidth()");
  console.assert(100 === root_child1.getComputedHeight(), "100 === root_child1.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(50 === root_child0.getComputedLeft(), "50 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(50 === root_child0.getComputedWidth(), "50 === root_child0.getComputedWidth()");
  console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight()");

  console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft()");
  console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop()");
  console.assert(50 === root_child1.getComputedWidth(), "50 === root_child1.getComputedWidth()");
  console.assert(100 === root_child1.getComputedHeight(), "100 === root_child1.getComputedHeight()");
});
it("flex_grow_within_constrained_min_column", function () {
  var root = new Yoga.Node();
  root.setMinHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setFlexGrow(1);
  root.insertChild(root_child0, 0);

  var root_child1 = new Yoga.Node();
  root_child1.setHeight(50);
  root.insertChild(root_child1, 1);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(0 === root.getComputedWidth(), "0 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(0 === root_child0.getComputedWidth(), "0 === root_child0.getComputedWidth()");
  console.assert(50 === root_child0.getComputedHeight(), "50 === root_child0.getComputedHeight()");

  console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft()");
  console.assert(50 === root_child1.getComputedTop(), "50 === root_child1.getComputedTop()");
  console.assert(0 === root_child1.getComputedWidth(), "0 === root_child1.getComputedWidth()");
  console.assert(50 === root_child1.getComputedHeight(), "50 === root_child1.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(0 === root.getComputedWidth(), "0 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(0 === root_child0.getComputedWidth(), "0 === root_child0.getComputedWidth()");
  console.assert(50 === root_child0.getComputedHeight(), "50 === root_child0.getComputedHeight()");

  console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft()");
  console.assert(50 === root_child1.getComputedTop(), "50 === root_child1.getComputedTop()");
  console.assert(0 === root_child1.getComputedWidth(), "0 === root_child1.getComputedWidth()");
  console.assert(50 === root_child1.getComputedHeight(), "50 === root_child1.getComputedHeight()");
});
it("flex_grow_within_constrained_max_row", function () {
  var root = new Yoga.Node();
  root.setWidth(200);

  var root_child0 = new Yoga.Node();
  root_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
  root_child0.setMaxWidth(100);
  root_child0.setHeight(100);
  root.insertChild(root_child0, 0);

  var root_child0_child0 = new Yoga.Node();
  root_child0_child0.setFlexShrink(1);
  root_child0_child0.setFlexBasis(100);
  root_child0.insertChild(root_child0_child0, 0);

  var root_child0_child1 = new Yoga.Node();
  root_child0_child1.setWidth(50);
  root_child0.insertChild(root_child0_child1, 1);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth()");
  console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight()");

  console.assert(0 === root_child0_child0.getComputedLeft(), "0 === root_child0_child0.getComputedLeft()");
  console.assert(0 === root_child0_child0.getComputedTop(), "0 === root_child0_child0.getComputedTop()");
  console.assert(50 === root_child0_child0.getComputedWidth(), "50 === root_child0_child0.getComputedWidth()");
  console.assert(100 === root_child0_child0.getComputedHeight(), "100 === root_child0_child0.getComputedHeight()");

  console.assert(50 === root_child0_child1.getComputedLeft(), "50 === root_child0_child1.getComputedLeft()");
  console.assert(0 === root_child0_child1.getComputedTop(), "0 === root_child0_child1.getComputedTop()");
  console.assert(50 === root_child0_child1.getComputedWidth(), "50 === root_child0_child1.getComputedWidth()");
  console.assert(100 === root_child0_child1.getComputedHeight(), "100 === root_child0_child1.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(100 === root_child0.getComputedLeft(), "100 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth()");
  console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight()");

  console.assert(50 === root_child0_child0.getComputedLeft(), "50 === root_child0_child0.getComputedLeft()");
  console.assert(0 === root_child0_child0.getComputedTop(), "0 === root_child0_child0.getComputedTop()");
  console.assert(50 === root_child0_child0.getComputedWidth(), "50 === root_child0_child0.getComputedWidth()");
  console.assert(100 === root_child0_child0.getComputedHeight(), "100 === root_child0_child0.getComputedHeight()");

  console.assert(0 === root_child0_child1.getComputedLeft(), "0 === root_child0_child1.getComputedLeft()");
  console.assert(0 === root_child0_child1.getComputedTop(), "0 === root_child0_child1.getComputedTop()");
  console.assert(50 === root_child0_child1.getComputedWidth(), "50 === root_child0_child1.getComputedWidth()");
  console.assert(100 === root_child0_child1.getComputedHeight(), "100 === root_child0_child1.getComputedHeight()");
});
it("flex_grow_within_constrained_max_column", function () {
  var root = new Yoga.Node();
  root.setWidth(100);
  root.setMaxHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setFlexShrink(1);
  root_child0.setFlexBasis(100);
  root.insertChild(root_child0, 0);

  var root_child1 = new Yoga.Node();
  root_child1.setHeight(50);
  root.insertChild(root_child1, 1);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth()");
  console.assert(50 === root_child0.getComputedHeight(), "50 === root_child0.getComputedHeight()");

  console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft()");
  console.assert(50 === root_child1.getComputedTop(), "50 === root_child1.getComputedTop()");
  console.assert(100 === root_child1.getComputedWidth(), "100 === root_child1.getComputedWidth()");
  console.assert(50 === root_child1.getComputedHeight(), "50 === root_child1.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth()");
  console.assert(50 === root_child0.getComputedHeight(), "50 === root_child0.getComputedHeight()");

  console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft()");
  console.assert(50 === root_child1.getComputedTop(), "50 === root_child1.getComputedTop()");
  console.assert(100 === root_child1.getComputedWidth(), "100 === root_child1.getComputedWidth()");
  console.assert(50 === root_child1.getComputedHeight(), "50 === root_child1.getComputedHeight()");
});