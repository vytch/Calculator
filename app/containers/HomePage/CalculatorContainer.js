import styled from 'styled-components';
import { palette } from '../../styleContants';
const CalculatorContainer = styled.div`
  -webkit-box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 30px auto;

  h1 {
    padding: 20px;
    margin: 0;
    border: 1px solid ${palette.border};
    border-bottom: none;
    background: ${palette.headerBackground};
    color: ${palette.headerColor};
  }
`;

export default CalculatorContainer;
