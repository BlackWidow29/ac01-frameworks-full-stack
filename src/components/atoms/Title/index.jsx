import styled from 'styled-components';
import { setResponsiveStyles } from '../../../utils/styleUtils';

export const Title = styled.h1`
  font-weight: 700;

  ${setResponsiveStyles(`
    font-size: 25px;
  `)}
`;