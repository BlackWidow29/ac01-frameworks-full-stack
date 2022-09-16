import styled from "styled-components";
import { FlexDiv } from "../../../base";

const separatorLine = `
  display: block;
  height: 1px;
  width: 140px;
  background: lightgray;
`;

export const Separator = styled(FlexDiv)`
  color: lightgray;
  font-size: 12px;
  margin: 5px 0 0;

  &::before {
    content: "";
    margin-right: 15px;
    ${separatorLine}
  }

  &::after {
    content: "";
    margin-left: 15px;
    ${separatorLine}
  }
`;