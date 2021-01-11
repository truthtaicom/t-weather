import { TextProps } from "./Text.types";
import React from "react";
import { StyledText } from "./Text.styled";

export default function Text(props: TextProps) {
  return <StyledText {...props} />;
}
