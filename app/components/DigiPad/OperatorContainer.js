import styled from 'styled-components';
import { palette } from '../../styleContants';

const OperatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    height: 50px;
    background: ${palette.secondary};
    color: #fff;
    border-left: 1px solid ${palette.border};
    &:not(:first-child) {
      border-top: 1px solid ${palette.border};
    }
    &:focus,
    &:hover {
      outline: none;
      background: ${palette.secondaryHover};
      cursor: pointer;
    }
    &:active {
      background: ${palette.secondaryActive};
    }
  }
`;

export default OperatorContainer;
