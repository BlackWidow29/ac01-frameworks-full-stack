import styled from "styled-components";
import { FlexDiv } from "../../components/base/FlexElements";
import peopleBannerImg from "../../assets/banners/people.png";

import { setResponsiveStyles } from '../../utils/styleUtils'

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  background: var(--tertiary);
  padding: 50px 70px;
  
  ${setResponsiveStyles(`
    padding: 0;
  `)}
`;

export const WhiteBox = styled(FlexDiv)`
  background: white;
`;

export const LoginBanner = styled.img.attrs({
  src: peopleBannerImg,
})`
  max-height: 60%;
`;