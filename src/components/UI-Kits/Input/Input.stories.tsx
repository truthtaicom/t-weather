import React from "react";
import { InputProps } from "./Input.types";
import { Story } from "@storybook/react";
import Input from "./Input";

const storyInfo = {
  title: "UI-Kits/Input",
  component: Input,
};

// We create a “template” of how args map to rendering
const InputTemplate: Story<InputProps> = (args) => <Input {...args} />;

// Each story then reuses that template
export const Playground = InputTemplate.bind({});
Playground.args = {};

export default storyInfo;
