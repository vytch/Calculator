/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import DigiPad from 'components/DigiPad';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      output: '',
      firstOperand: null,
      secondOperand: null,
      operator: null,
    };

    this.handleTap = this.onTap.bind(this);
  }
  onTap(e) {
    const { value } = e.target;
    const type = e.target.getAttribute('data-type');
    if (type === 'operator') {
      this.updateOperator(value);
    } else if (type === 'operand') {
      this.updateOperand(value);
    }
  }
  updateOutput() {
    this.setState(prevState => {
      let output = '';
      if (prevState.firstOperand != null && prevState.operator === null) {
        output = prevState.firstOperand;
      } else if (
        prevState.firstOperand != null &&
        prevState.operator != null &&
        prevState.secondOperand === null
      ) {
        output = prevState.operator;
      } else if (
        prevState.firstOperand != null &&
        prevState.operator != null &&
        prevState.secondOperand != null
      ) {
        output = prevState.secondOperand;
      }
      return {
        output,
      };
    });
  }
  updateOperator(value) {
    if (this.state.firstOperand !== null) {
      this.setState({
        operator: value,
      });
    }
    this.updateOutput();
  }
  updateOperand(value) {
    // If the operator is null, then we know we need to touch the first operand.
    if (this.state.operator === null) {
      this.setState(prevState => ({
        firstOperand:
          prevState.firstOperand === null
            ? value
            : prevState.firstOperand + value,
      }));
    } else {
      this.setState(prevState => ({
        secondOperand:
          prevState.secondOperand === null
            ? value
            : prevState.secondOperand + value,
      }));
    }
    this.updateOutput();
  }
  render() {
    return (
      <div>
        <h1>My react calculator</h1>
        Output: {this.state.output}
        <DigiPad onInputTap={this.handleTap} />
      </div>
    );
  }
}
