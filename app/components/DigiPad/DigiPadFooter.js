//
import styled from 'styled-components';
import { palette } from '../../styleContants';

const DigiPadBody = styled.div`
  border: 1px solid #37474f;
  border-top: none;
  button {
    width: 100%;
    height: 50px;
    background: ${palette.tertiary};
    color: #fff;
    &:focus,
    &:hover {
      outline: none;
      background: ${palette.tertiaryHover};
      cursor: pointer;
    }
    &:active {
      background: ${palette.tertiaryActive};
    }
  }
`;

export default DigiPadBody;
