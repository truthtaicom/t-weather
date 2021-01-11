import Text from "antd/lib/typography/Text";
import styled from "styled-components";

export const StyledText = styled<any>(Text)`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ size = 13 }) => `${size}px`};
  line-height: 15px;
`;
