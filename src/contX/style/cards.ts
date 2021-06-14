import styled from 'styled-components';
import { Card } from '../model/cards';
import { FullFillWrapper } from './common';

export const ControlsWrapper = styled.div`
  margin-bottom: 20px;
`;

const cardWidth = 200;
const cardHeight = 140;

export const CardsArea = styled(FullFillWrapper)`
  position: relative;
  width: calc(100% - ${cardWidth}px);
  height: calc(100% - ${cardHeight}px);
`;

const getBrightness = (color: string) => {
  const mat = color.match(/(\d+),(\d+),(\d+)/);
  if (!mat) return 0;
  const [, r, g, b] = mat.map(Number);
  const ret = (r * 299 + g * 587 + b * 114) / 1000;
  // const ret = r * 0.3 + g * 0.6 + b * 0.1;
  return ret;
};

export const CardWrapper = styled.div<{ card: Card }>`
  position: absolute;
  left: ${(props) => `${props.card.position.x * 100}%`};
  top: ${(props) => `${props.card.position.y * 100}%`};
  width: ${cardWidth}px;
  /* height: ${cardHeight}px; */
  max-height: ${cardHeight}px;
  background-color: ${(props) => props.card.backColor};
  color: ${(props) =>
    // getBrightness(props.card.backColor) > 127 ? 'black' : 'white'};
    getBrightness(props.card.backColor) > 160 ? 'black' : 'white'};
  padding: 12px;
  box-sizing: border-box;
  word-break: break-all;
  display: flex;

  > div {
    flex: 1;
    display: flex;
    white-space: pre-wrap;
    overflow: hidden;
    position: relative;

    > div {
      padding: 6px;
    }

    > textarea {
      flex: 1;
      position: absolute;
      width: 100%;
      height: 100%;
      font: inherit;
      box-sizing: border-box;
      resize: none;
    }
  }
`;
