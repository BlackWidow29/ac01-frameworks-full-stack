import styled from "styled-components";

const BaseFlex = styled.div`
  display: flex;
  
  &.column {
    flex-direction: column;
  }
  
  &.align-center {
    align-items: center;
  }

  &.justify-center {
    justify-content: center;
  }

  &.justify-between {
    justify-content: space-between;
  }
`;

export const FlexDiv = styled(BaseFlex)``

export const FlexSpan = styled(BaseFlex).attrs({
  as: 'span'
})``

export const FlexForm = styled(BaseFlex).attrs({
  as: 'form'
})``;