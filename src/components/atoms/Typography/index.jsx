import styled from "styled-components";
import { setFontWeight } from "../../../utils/styleUtils";

const BaseTypography = styled.p(
  ({ strong, bold, disabled, clickable, danger }) => ({
    fontWeight: setFontWeight({ strong, bold }),
    color: disabled ? "lightgray" : danger && "darkred",
    cursor: clickable && "pointer",
  })
);

export const Typography = styled(BaseTypography)`
  font-size: 15px;

  &.text-primary {
    color: var(--primary);
  }

  @media screen and (min-width: 320px) {
    font-size: calc(15px + 6 * ((100vw - 320px) / 680));
  }

  @media screen and (min-width: 1000px) {
    font-size: 15px;
  }
`;

export const Label = styled(Typography).attrs({
  as: "label",
})`
  cursor: pointer;
`;
