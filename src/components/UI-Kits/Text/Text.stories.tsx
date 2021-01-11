import { Story } from "@storybook/react";
import React from "react";
import Text from ".";
import { TextProps } from "./Text.types";

const storyInfo = {
  title: "UI-Kits/Text",
  component: Text,
};

// We create a “template” of how args map to rendering
const TextTemplate: Story<TextProps> = (args) => {
  return <Text {...args}>Weather</Text>;
};

export const Basic = TextTemplate.bind({});
Basic.args = { disabled: false };

export default storyInfo;
