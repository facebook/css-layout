/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

 // @Generated by gentest/gentest.rb from gentest/fixtures/YGAlignSelfTest.html

var Yoga = require("../../sources/entry-" + process.env.TEST_ENTRY);

it("align_self_center", function () {
  var root = new Yoga.Node();
  root.setWidth(100);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setAlignSelf(Yoga.ALIGN_CENTER);
  root_child0.setWidth(10);
  root_child0.setHeight(10);
  root.insertChild(root_child0, 0);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(45 === root_child0.getComputedLeft(), "45 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(45 === root_child0.getComputedLeft(), "45 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");
});
it("align_self_flex_end", function () {
  var root = new Yoga.Node();
  root.setWidth(100);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setAlignSelf(Yoga.ALIGN_FLEX_END);
  root_child0.setWidth(10);
  root_child0.setHeight(10);
  root.insertChild(root_child0, 0);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(90 === root_child0.getComputedLeft(), "90 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");
});
it("align_self_flex_start", function () {
  var root = new Yoga.Node();
  root.setWidth(100);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setAlignSelf(Yoga.ALIGN_FLEX_START);
  root_child0.setWidth(10);
  root_child0.setHeight(10);
  root.insertChild(root_child0, 0);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(90 === root_child0.getComputedLeft(), "90 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");
});
it("align_self_flex_end_override_flex_start", function () {
  var root = new Yoga.Node();
  root.setAlignItems(Yoga.ALIGN_FLEX_START);
  root.setWidth(100);
  root.setHeight(100);

  var root_child0 = new Yoga.Node();
  root_child0.setAlignSelf(Yoga.ALIGN_FLEX_END);
  root_child0.setWidth(10);
  root_child0.setHeight(10);
  root.insertChild(root_child0, 0);
  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(90 === root_child0.getComputedLeft(), "90 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

  console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft()");
  console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop()");
  console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth()");
  console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight()");

  console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft()");
  console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop()");
  console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth()");
  console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight()");
});