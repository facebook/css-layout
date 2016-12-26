/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

 // @Generated by gentest/gentest.rb from gentest/fixtures/YGAbsolutePositionTest.html

var Yoga = require("../../sources/entry-" + process.env.TEST_ENTRY);

it("absolute_layout_width_height_start_top", function () {
  var root = new Yoga.Node();
  root.setWidth(100);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
  root_child0.setPosition(Yoga.EDGE_START, 10);
  root_child0.setPosition(Yoga.EDGE_TOP, 10);
  root_child0.setWidth(10);
  root_child0.setHeight(10);
  root.insertChild(root_child0, 0);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(10 === root_child0.getComputedLeft(), "10 === root_child0.getComputedLeft()");
  console.assert(10 === root_child0.getComputedTop(), "10 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(80 === root_child0.getComputedLeft(), "80 === root_child0.getComputedLeft()");
  console.assert(10 === root_child0.getComputedTop(), "10 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");
});
it("absolute_layout_width_height_end_bottom", function () {
  var root = new Yoga.Node();
  root.setWidth(100);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
  root_child0.setPosition(Yoga.EDGE_END, 10);
  root_child0.setPosition(Yoga.EDGE_BOTTOM, 10);
  root_child0.setWidth(10);
  root_child0.setHeight(10);
  root.insertChild(root_child0, 0);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(80 === root_child0.getComputedLeft(), "80 === root_child0.getComputedLeft()");
  console.assert(80 === root_child0.getComputedTop(), "80 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(10 === root_child0.getComputedLeft(), "10 === root_child0.getComputedLeft()");
  console.assert(80 === root_child0.getComputedTop(), "80 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");
});
it("absolute_layout_start_top_end_bottom", function () {
  var root = new Yoga.Node();
  root.setWidth(100);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
  root_child0.setPosition(Yoga.EDGE_START, 10);
  root_child0.setPosition(Yoga.EDGE_TOP, 10);
  root_child0.setPosition(Yoga.EDGE_END, 10);
  root_child0.setPosition(Yoga.EDGE_BOTTOM, 10);
  root.insertChild(root_child0, 0);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(10 === root_child0.getComputedLeft(), "10 === root_child0.getComputedLeft()");
  console.assert(10 === root_child0.getComputedTop(), "10 === root_child0.getComputedTop()");
  console.assert(80 === root_child0.getComputedWidth(), "80 === root_child0.getComputedWidth()");
  console.assert(80 === root_child0.getComputedHeight(), "80 === root_child0.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(10 === root_child0.getComputedLeft(), "10 === root_child0.getComputedLeft()");
  console.assert(10 === root_child0.getComputedTop(), "10 === root_child0.getComputedTop()");
  console.assert(80 === root_child0.getComputedWidth(), "80 === root_child0.getComputedWidth()");
  console.assert(80 === root_child0.getComputedHeight(), "80 === root_child0.getComputedHeight()");
});
it("absolute_layout_width_height_start_top_end_bottom", function () {
  var root = new Yoga.Node();
  root.setWidth(100);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
  root_child0.setPosition(Yoga.EDGE_START, 10);
  root_child0.setPosition(Yoga.EDGE_TOP, 10);
  root_child0.setPosition(Yoga.EDGE_END, 10);
  root_child0.setPosition(Yoga.EDGE_BOTTOM, 10);
  root_child0.setWidth(10);
  root_child0.setHeight(10);
  root.insertChild(root_child0, 0);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(10 === root_child0.getComputedLeft(), "10 === root_child0.getComputedLeft()");
  console.assert(10 === root_child0.getComputedTop(), "10 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(80 === root_child0.getComputedLeft(), "80 === root_child0.getComputedLeft()");
  console.assert(10 === root_child0.getComputedTop(), "10 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");
});
it("do_not_clamp_height_of_absolute_node_to_height_of_its_overflow_hidden_parent", function () {
  var root = new Yoga.Node();
  root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
  root.setOverflow(Yoga.OVERFLOW_HIDDEN);
  root.setWidth(50);
  root.setHeight(50);

  var root_child0 = new Yoga.Node();
  root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
  root_child0.setPosition(Yoga.EDGE_START, 0);
  root_child0.setPosition(Yoga.EDGE_TOP, 0);
  root.insertChild(root_child0, 0);

  var root_child0_child0 = new Yoga.Node();
  root_child0_child0.setWidth(100);
  root_child0_child0.setHeight(100);
  root_child0.insertChild(root_child0_child0, 0);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(50 === root.getComputedWidth(), "50 === root.getComputedWidth()");
  console.assert(50 === root.getComputedHeight(), "50 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth()");
  console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight()");

  console.assert(0 === root_child0_child0.getComputedLeft(), "0 === root_child0_child0.getComputedLeft()");
  console.assert(0 === root_child0_child0.getComputedTop(), "0 === root_child0_child0.getComputedTop()");
  console.assert(100 === root_child0_child0.getComputedWidth(), "100 === root_child0_child0.getComputedWidth()");
  console.assert(100 === root_child0_child0.getComputedHeight(), "100 === root_child0_child0.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(50 === root.getComputedWidth(), "50 === root.getComputedWidth()");
  console.assert(50 === root.getComputedHeight(), "50 === root.getComputedHeight()");

  console.assert(-50 === root_child0.getComputedLeft(), "-50 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth()");
  console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight()");

  console.assert(0 === root_child0_child0.getComputedLeft(), "0 === root_child0_child0.getComputedLeft()");
  console.assert(0 === root_child0_child0.getComputedTop(), "0 === root_child0_child0.getComputedTop()");
  console.assert(100 === root_child0_child0.getComputedWidth(), "100 === root_child0_child0.getComputedWidth()");
  console.assert(100 === root_child0_child0.getComputedHeight(), "100 === root_child0_child0.getComputedHeight()");
});
it("absolute_layout_within_border", function () {
  var root = new Yoga.Node();
  root.setMargin(Yoga.EDGE_LEFT, 10);
  root.setMargin(Yoga.EDGE_TOP, 10);
  root.setMargin(Yoga.EDGE_RIGHT, 10);
  root.setMargin(Yoga.EDGE_BOTTOM, 10);
  root.setPadding(Yoga.EDGE_LEFT, 10);
  root.setPadding(Yoga.EDGE_TOP, 10);
  root.setPadding(Yoga.EDGE_RIGHT, 10);
  root.setPadding(Yoga.EDGE_BOTTOM, 10);
  root.setBorder(Yoga.EDGE_LEFT, 10);
  root.setBorder(Yoga.EDGE_TOP, 10);
  root.setBorder(Yoga.EDGE_RIGHT, 10);
  root.setBorder(Yoga.EDGE_BOTTOM, 10);
  root.setWidth(100);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
  root_child0.setPosition(Yoga.EDGE_LEFT, 0);
  root_child0.setPosition(Yoga.EDGE_TOP, 0);
  root_child0.setWidth(50);
  root_child0.setHeight(50);
  root.insertChild(root_child0, 0);

  var root_child1 = new Yoga.Node();
  root_child1.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
  root_child1.setPosition(Yoga.EDGE_RIGHT, 0);
  root_child1.setPosition(Yoga.EDGE_BOTTOM, 0);
  root_child1.setWidth(50);
  root_child1.setHeight(50);
  root.insertChild(root_child1, 1);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(10 === root.getComputedLeft(), "10 === root.getComputedLeft()");
  console.assert(10 === root.getComputedTop(), "10 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(10 === root_child0.getComputedLeft(), "10 === root_child0.getComputedLeft()");
  console.assert(10 === root_child0.getComputedTop(), "10 === root_child0.getComputedTop()");
  console.assert(50 === root_child0.getComputedWidth(), "50 === root_child0.getComputedWidth()");
  console.assert(50 === root_child0.getComputedHeight(), "50 === root_child0.getComputedHeight()");

  console.assert(40 === root_child1.getComputedLeft(), "40 === root_child1.getComputedLeft()");
  console.assert(40 === root_child1.getComputedTop(), "40 === root_child1.getComputedTop()");
  console.assert(50 === root_child1.getComputedWidth(), "50 === root_child1.getComputedWidth()");
  console.assert(50 === root_child1.getComputedHeight(), "50 === root_child1.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(10 === root.getComputedLeft(), "10 === root.getComputedLeft()");
  console.assert(10 === root.getComputedTop(), "10 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(10 === root_child0.getComputedLeft(), "10 === root_child0.getComputedLeft()");
  console.assert(10 === root_child0.getComputedTop(), "10 === root_child0.getComputedTop()");
  console.assert(50 === root_child0.getComputedWidth(), "50 === root_child0.getComputedWidth()");
  console.assert(50 === root_child0.getComputedHeight(), "50 === root_child0.getComputedHeight()");

  console.assert(40 === root_child1.getComputedLeft(), "40 === root_child1.getComputedLeft()");
  console.assert(40 === root_child1.getComputedTop(), "40 === root_child1.getComputedTop()");
  console.assert(50 === root_child1.getComputedWidth(), "50 === root_child1.getComputedWidth()");
  console.assert(50 === root_child1.getComputedHeight(), "50 === root_child1.getComputedHeight()");
});