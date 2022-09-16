import styled from "styled-components";
import { setPadding, setResponsiveStyles } from "../../../utils/styleUtils";

const BaseButton = styled.button`
  min-height: 50px;
  border-radius: 25px;
  padding: ${setPadding};
  margin: 10px 0;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;

  ${setResponsiveStyles(`
    min-height: 45px;
    height: 45px;
  `)}
`;

const RippleButton = styled(BaseButton)`
  outline: none;
  background-position: center;
  transition: background 0.5s;

  &:active {
    background-size: 100%;
    transition: background 0s;
  }
`;

export const PrimaryButton = styled(RippleButton)`
  color: white;
  background: var(--primary);

  &:hover {
    background: var(--primary-hover)
      radial-gradient(circle, transparent 1%, var(--primary-hover) 1%)
      center/15000%;
  }

  &:active {
    background-color: var(--primary-active);
  }
`;

export const OutlinedButton = styled(BaseButton)`
  border: 1px solid lightgray;
  background: white;
`;

export const SuccessButton = styled(RippleButton)`
  color: white;
  background: var(--success);

  &:hover {
    background: var(--success-hover)
      radial-gradient(circle, transparent 1%, var(--success-hover) 1%)
      center/15000%;
  }

  &:active {
    background-color: var(--success-active);
  }
`;
