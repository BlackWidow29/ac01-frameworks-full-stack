import styled from "styled-components";

const BaseCheckBox = styled.input.attrs({
  type: "checkbox",
})`
  margin-right: 10px;
  transform: scale(1.35);
  cursor: pointer;
`;

export const PrimaryCheckBox = styled(BaseCheckBox)`
  accent-color: var(--primary);
`;
