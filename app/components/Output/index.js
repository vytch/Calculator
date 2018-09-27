/**
 *
 * Output
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import OutputContainer from './OutputContainer';
import { formatOutput } from './format';
// import styled from 'styled-components';

function Output(props) {
  return <OutputContainer>{formatOutput(props.value)}</OutputContainer>;
}

Output.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Output;
