import styled from 'styled-components';

const OperatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    height: 50px;
    background: #546e7a;
    color: #fff;
    border-left: 1px solid #37474f;
    &:not(:first-child) {
      border-top: 1px solid #37474f;
    }
    &:focus,
    &:hover {
      outline: none;
      background: #455a64;
      cursor: pointer;
    }
    &:active {
      background: #37474f;
    }
  }
`;

export default OperatorContainer;
