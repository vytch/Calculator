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
import CalculatorContainer from './CalculatorContainer';
import OutputContainer from './OutputContainer';
import { calculator } from '../../utils/calculator';
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      output: null,
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
    } else if (type === 'process') {
      this.processCalculator(value);
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
  processCalculator(value) {
    if (value === '=') {
      if (this.state.operator === null) {
        return;
      }
      this.setState(prevState => ({
        firstOperand: null,
        secondOperand: null,
        operator: null,
        output: calculator(prevState.operator)(
          prevState.firstOperand,
          prevState.secondOperand,
        ),
      }));
    }
    if (value === 'C') {
      this.setState({
        firstOperand: null,
        secondOperand: null,
        operator: null,
        output: null,
      });
    }
  }
  updateOperand(value) {
    console.log(value);
    // If the operator is null, then we know we need to touch the first operand.
    if (this.state.operator === null) {
      this.setState(prevState => {
        if (
          value === '.' &&
          typeof prevState.firstOperand === 'string' &&
          prevState.firstOperand.indexOf('.') !== -1
        ) {
          return {
            firstOperand: prevState.firstOperand,
          };
        }
        return {
          firstOperand:
            prevState.firstOperand === null
              ? value
              : prevState.firstOperand + value,
        };
      });
    } else {
      this.setState(prevState => {
        if (
          value === '.' &&
          typeof prevState.secondOperand === 'string' &&
          prevState.secondOperand.indexOf('.') !== -1
        ) {
          return {
            secondOperand: prevState.secondOperand,
          };
        }
        return {
          secondOperand:
            prevState.secondOperand === null
              ? value
              : prevState.secondOperand + value,
        };
      });
    }
    this.updateOutput();
  }
  formatOutput(output) {
    if (output === null) {
      return 0;
    }
    return output;
  }
  render() {
    return (
      <div>
        <h1>My react calculator</h1>
        <CalculatorContainer>
          <OutputContainer>
            {this.formatOutput(this.state.output)}
          </OutputContainer>
          <DigiPad onInputTap={this.handleTap} />
        </CalculatorContainer>
      </div>
    );
  }
}
