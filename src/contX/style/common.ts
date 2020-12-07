import styled, { css } from 'styled-components';

export const fullFillCss = css`
  width: 100%;
  height: 100%;
`;

export const FullFillWrapper = styled.div`
  ${fullFillCss}
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const TopWrapper = styled(FullFillWrapper)`
  padding: 20px;
  position: relative;
  box-sizing: border-box;
`;
