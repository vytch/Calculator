import styled from 'styled-components';
import { palette } from '../../styleContants';

const OperandContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  button {
    width: 33.333333%;
    height: 50px;
    background: ${palette.primary};
    border-top: 1px solid ${palette.border};
    border-right: 1px solid ${palette.border};
    &:nth-child(-n + 3) {
      border-top: none;
    }
    &:nth-child(3n) {
      border-right: none;
    }
    &:focus,
    &:hover {
      outline: none;
      background: ${palette.primaryHover};
      cursor: pointer;
    }
    &:active {
      background: ${palette.primaryActive};
    }
  }
`;

export default OperandContainer;
