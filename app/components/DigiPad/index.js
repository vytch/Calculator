/**
 *
 * DigiPad
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class DigiPad extends React.PureComponent {

  render() {
    return (
      <div>
        <button value="1" onClick={this.props.onInputTap}>1</button>
      </div>
    );
  }
}

DigiPad.defaultProps = {
  onInputTap: () => {},
};

DigiPad.propTypes = {
  onInputTap: PropTypes.func,
};

export default DigiPad;
