/**
 *
 * DigiPad
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class DigiPad extends React.Component {
  render() {
    return (
      <div>
        <button data-type="operand" value="0" onClick={this.props.onInputTap}>
          0
        </button>
        <button data-type="operand" value="1" onClick={this.props.onInputTap}>
          1
        </button>
        <button data-type="operand" value="2" onClick={this.props.onInputTap}>
          2
        </button>
        <button data-type="operand" value="3" onClick={this.props.onInputTap}>
          3
        </button>
        <button data-type="operand" value="4" onClick={this.props.onInputTap}>
          4
        </button>
        <button data-type="operand" value="5" onClick={this.props.onInputTap}>
          5
        </button>
        <button data-type="operand" value="6" onClick={this.props.onInputTap}>
          6
        </button>
        <button data-type="operand" value="7" onClick={this.props.onInputTap}>
          7
        </button>
        <button data-type="operand" value="8" onClick={this.props.onInputTap}>
          8
        </button>
        <button data-type="operand" value="9" onClick={this.props.onInputTap}>
          9
        </button>

        <button data-type="operator" value="+" onClick={this.props.onInputTap}>
          +
        </button>
        <button data-type="operator" value="-" onClick={this.props.onInputTap}>
          -
        </button>
        <button data-type="operator" value="*" onClick={this.props.onInputTap}>
          *
        </button>
        <button data-type="operator" value="/" onClick={this.props.onInputTap}>
          /
        </button>

        <button data-type="process" value="=" onClick={this.props.onInputTap}>
          =
        </button>
        <button data-type="process" value="CE" onClick={this.props.onInputTap}>
          CE
        </button>
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
