import styled from 'styled-components';

const OperandContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  button {
    width: 33.333333%;
    height: 50px;
    background: #cfd8dc;
    border-top: 1px solid #37474f;
    border-right: 1px solid #37474f;
    &:nth-child(-n + 3) {
      border-top: none;
    }
    &:nth-child(3n) {
      border-right: none;
    }
    &:focus,
    &:hover {
      outline: none;
      background: #b0bec5;
      cursor: pointer;
    }
    &:active {
      background: #90a4ae;
    }
  }
`;

export default OperandContainer;
