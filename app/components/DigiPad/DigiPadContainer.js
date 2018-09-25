//
import styled from 'styled-components';

const DigiPadContainer = styled.div`
  border: 1px solid #37474f;
  display: flex;
  > * {
    &:first-child {
      width: 75%;
    }
    &:last-child {
      width: 25%;
    }
  }
  button {
    -webkit-appearance: none;
  }
`;

export default DigiPadContainer;
