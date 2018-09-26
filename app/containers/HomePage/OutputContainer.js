import styled from 'styled-components';
import { palette } from '../../styleContants';

const OutputContainer = styled.div`
  border-bottom: none;
  padding: 0 40px;
  line-height: 60px;
  font-size: 1.5rem;
  min-height: 60px;
  text-align: right;
  background: ${palette.output};
  letter-spacing: 0.75px;
  color: #fff;
`;

export default OutputContainer;
