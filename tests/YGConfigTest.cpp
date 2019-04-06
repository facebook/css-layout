/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory of this source tree.
 */
// @Generated by gentest/gentest.rb from gentest/fixtures/YGDisplayTest.html

#include <gtest/gtest.h>
#include <yoga/Yoga.h>
#include <yoga/YGConfig.h>
#include <yoga/YGNode.h>

#include <functional>
#include <memory>

struct ConfigCloningTest : public ::testing::Test {
  std::unique_ptr<YGConfig, std::function<void(YGConfig*)>> config;
  void SetUp() override;
  void TearDown() override;

  static YGNode clonedNode;
  static YGNodeRef cloneNode(YGNodeRef, YGNodeRef, int) {
    return &clonedNode;
  }
  static YGNodeRef doNotClone(YGNodeRef, YGNodeRef, int) {
    return nullptr;
  }
};

TEST_F(ConfigCloningTest, uses_values_provided_by_cloning_callback) {
  config->setCloneNodeCallback(cloneNode);

  YGNode node{}, owner{};
  auto clone = config->cloneNode(&node, &owner, 0, nullptr);

  ASSERT_EQ(clone, &clonedNode);
}

TEST_F(
    ConfigCloningTest,
    falls_back_to_regular_cloning_if_callback_returns_null) {
  config->setCloneNodeCallback(doNotClone);

  YGNode node{}, owner{};
  auto clone = config->cloneNode(&node, &owner, 0, nullptr);

  ASSERT_NE(clone, nullptr);
  YGNodeFree(clone);
}

TEST_F(ConfigCloningTest, can_clone_with_context) {
  config->setCloneNodeCallback([](YGNodeRef, YGNodeRef, int, void* context) {
    return (YGNodeRef) context;
  });

  YGNode node{}, owner{}, clone{};
  ASSERT_EQ(config->cloneNode(&node, &owner, 0, &clone), &clone);
}

void ConfigCloningTest::SetUp() {
  config = {YGConfigNew(), YGConfigFree};
}

void ConfigCloningTest::TearDown() {
  config.reset();
}

YGNode ConfigCloningTest::clonedNode = {};
