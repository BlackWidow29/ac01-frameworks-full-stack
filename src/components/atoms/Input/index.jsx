import styled from "styled-components";
import { setPadding, setResponsiveStyles } from "../../../utils/styleUtils";

const BaseInput = styled.input`
  min-height: 50px;
  padding: ${setPadding};
  padding-left: 30px;
  font-size: 15px;
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "auto")};
  margin: 10px 0;

  ${setResponsiveStyles(`
    min-height: 45px;
  `)};
`;

export const Input = styled(BaseInput)`
  border: 1px solid lightgray;
  border-radius: 25px;
`;
