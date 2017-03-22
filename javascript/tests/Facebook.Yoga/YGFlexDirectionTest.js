/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// @Generated by gentest/gentest.rb from gentest/fixtures/YGFlexDirectionTest.html

var Yoga = Yoga || require("../../sources/entry-" + process.env.TEST_ENTRY);

it("flex_direction_column_no_height", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(30 === root.getComputedHeight(), "30 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(10 === root_child1.getComputedTop(), "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(100 === root_child1.getComputedWidth(), "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(10 === root_child1.getComputedHeight(), "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    console.assert(0 === root_child2.getComputedLeft(), "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")");
    console.assert(20 === root_child2.getComputedTop(), "20 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")");
    console.assert(100 === root_child2.getComputedWidth(), "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")");
    console.assert(10 === root_child2.getComputedHeight(), "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(30 === root.getComputedHeight(), "30 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(10 === root_child1.getComputedTop(), "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(100 === root_child1.getComputedWidth(), "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(10 === root_child1.getComputedHeight(), "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    console.assert(0 === root_child2.getComputedLeft(), "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")");
    console.assert(20 === root_child2.getComputedTop(), "20 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")");
    console.assert(100 === root_child2.getComputedWidth(), "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")");
    console.assert(10 === root_child2.getComputedHeight(), "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("flex_direction_row_no_width", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(30 === root.getComputedWidth(), "30 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(10 === root_child1.getComputedLeft(), "10 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(10 === root_child1.getComputedWidth(), "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(100 === root_child1.getComputedHeight(), "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    console.assert(20 === root_child2.getComputedLeft(), "20 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")");
    console.assert(0 === root_child2.getComputedTop(), "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")");
    console.assert(10 === root_child2.getComputedWidth(), "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")");
    console.assert(100 === root_child2.getComputedHeight(), "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(30 === root.getComputedWidth(), "30 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(20 === root_child0.getComputedLeft(), "20 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(10 === root_child1.getComputedLeft(), "10 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(10 === root_child1.getComputedWidth(), "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(100 === root_child1.getComputedHeight(), "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    console.assert(0 === root_child2.getComputedLeft(), "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")");
    console.assert(0 === root_child2.getComputedTop(), "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")");
    console.assert(10 === root_child2.getComputedWidth(), "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")");
    console.assert(100 === root_child2.getComputedHeight(), "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("flex_direction_column", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(10 === root_child1.getComputedTop(), "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(100 === root_child1.getComputedWidth(), "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(10 === root_child1.getComputedHeight(), "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    console.assert(0 === root_child2.getComputedLeft(), "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")");
    console.assert(20 === root_child2.getComputedTop(), "20 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")");
    console.assert(100 === root_child2.getComputedWidth(), "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")");
    console.assert(10 === root_child2.getComputedHeight(), "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(10 === root_child1.getComputedTop(), "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(100 === root_child1.getComputedWidth(), "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(10 === root_child1.getComputedHeight(), "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    console.assert(0 === root_child2.getComputedLeft(), "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")");
    console.assert(20 === root_child2.getComputedTop(), "20 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")");
    console.assert(100 === root_child2.getComputedWidth(), "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")");
    console.assert(10 === root_child2.getComputedHeight(), "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("flex_direction_row", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(10 === root_child1.getComputedLeft(), "10 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(10 === root_child1.getComputedWidth(), "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(100 === root_child1.getComputedHeight(), "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    console.assert(20 === root_child2.getComputedLeft(), "20 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")");
    console.assert(0 === root_child2.getComputedTop(), "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")");
    console.assert(10 === root_child2.getComputedWidth(), "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")");
    console.assert(100 === root_child2.getComputedHeight(), "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(90 === root_child0.getComputedLeft(), "90 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(80 === root_child1.getComputedLeft(), "80 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(10 === root_child1.getComputedWidth(), "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(100 === root_child1.getComputedHeight(), "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    console.assert(70 === root_child2.getComputedLeft(), "70 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")");
    console.assert(0 === root_child2.getComputedTop(), "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")");
    console.assert(10 === root_child2.getComputedWidth(), "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")");
    console.assert(100 === root_child2.getComputedHeight(), "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("flex_direction_column_reverse", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_COLUMN_REVERSE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(90 === root_child0.getComputedTop(), "90 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(80 === root_child1.getComputedTop(), "80 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(100 === root_child1.getComputedWidth(), "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(10 === root_child1.getComputedHeight(), "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    console.assert(0 === root_child2.getComputedLeft(), "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")");
    console.assert(70 === root_child2.getComputedTop(), "70 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")");
    console.assert(100 === root_child2.getComputedWidth(), "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")");
    console.assert(10 === root_child2.getComputedHeight(), "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(90 === root_child0.getComputedTop(), "90 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(80 === root_child1.getComputedTop(), "80 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(100 === root_child1.getComputedWidth(), "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(10 === root_child1.getComputedHeight(), "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    console.assert(0 === root_child2.getComputedLeft(), "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")");
    console.assert(70 === root_child2.getComputedTop(), "70 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")");
    console.assert(100 === root_child2.getComputedWidth(), "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")");
    console.assert(10 === root_child2.getComputedHeight(), "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("flex_direction_row_reverse", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW_REVERSE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(90 === root_child0.getComputedLeft(), "90 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(80 === root_child1.getComputedLeft(), "80 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(10 === root_child1.getComputedWidth(), "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(100 === root_child1.getComputedHeight(), "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    console.assert(70 === root_child2.getComputedLeft(), "70 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")");
    console.assert(0 === root_child2.getComputedTop(), "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")");
    console.assert(10 === root_child2.getComputedWidth(), "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")");
    console.assert(100 === root_child2.getComputedHeight(), "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(10 === root_child1.getComputedLeft(), "10 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(10 === root_child1.getComputedWidth(), "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(100 === root_child1.getComputedHeight(), "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    console.assert(20 === root_child2.getComputedLeft(), "20 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")");
    console.assert(0 === root_child2.getComputedTop(), "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")");
    console.assert(10 === root_child2.getComputedWidth(), "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")");
    console.assert(100 === root_child2.getComputedHeight(), "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
