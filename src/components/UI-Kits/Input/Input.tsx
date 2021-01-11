import { InputProps } from "./Input.types";
import React from "react";
import { StyledInput } from "./Input.styled";

export default function Input(props: InputProps) {
  return <StyledInput {...props} />;
}
