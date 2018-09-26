import React from 'react';
import DigiPad from 'components/DigiPad';
import CalculatorContainer from './CalculatorContainer';
import OutputContainer from './OutputContainer';
import { calculator } from '../../utils/calculator';
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor() {
    super();

    // State of the application.
    this.state = {
      output: null,
      firstOperand: null,
      secondOperand: null,
      operator: null,
    };

    // We use a single evednt for all button actions.
    // We will work out what to do based on what the button attributes are.
    this.handleTap = this.onTap.bind(this);
  }
  onTap(e) {
    // When we click on a button, we essentially care about 2 things:
    // What type of button we have pressed (operand, operator, process).
    // And its value.
    // This way if we wanted to add more types (ex fn for cos and sin), then we just need to create one method in this class and call it from here.
    const { value } = e.target;
    const type = e.target.getAttribute('data-type');

    // Based on the type, we will trigger a different action.
    // Since the app is quite simple, I did not feel the use of redux was necessary.
    if (type === 'operator') {
      this.updateOperator(value);
    } else if (type === 'operand') {
      this.updateOperand(value);
    } else if (type === 'process') {
      this.processCalculator(value);
    }
  }

  // This function is responsible for updating the output.
  // The output basically try to display the last action from the user in this order:
  // - Update of first operand
  // - Update of Operator
  // - Update of the second operand.

  updateOutput() {
    this.setState(prevState => {
      let output = null;

      if (prevState.firstOperand != null && prevState.operator === null) {
        // If we have only the value of the first opersnd, then display the first operand.
        output = prevState.firstOperand;
      } else if (
        // If we have the first operand and the operator, then display the operator
        prevState.firstOperand != null &&
        prevState.operator != null &&
        prevState.secondOperand === null
      ) {
        output = prevState.operator;
      } else if (
        // If we have the first operand and the operator, then display second operator
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
  // This function sets the operator we want.
  updateOperator(value) {
    // To update the operator, we need to have the first operand
    if (this.state.secondOperand !== null) {
      return;
    }
    if (this.state.firstOperand !== null && this.state.firstOperand !== '.') {
      this.setState({
        operator: value,
      });
    } else if (this.state.output !== null && this.state.firstOperand !== '.') {
      this.setState(prevState => ({
        firstOperand: `${prevState.output}`,
        operator: value,
      }));
    }
    this.updateOutput();
  }

  // This part processes the calculator.
  processCalculator(value) {
    if (value === '=') {
      // We should not process the = if no operator has been set
      if (this.state.operator === null || this.state.secondOperand === '.') {
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
      // We can clear the app
      this.setState({
        firstOperand: null,
        secondOperand: null,
        operator: null,
        output: null,
      });
    }
  }
  updateOperand(value) {
    // If the operator is null, then we know we need to touch the first operand.
    if (this.state.operator === null) {
      // If we use the . then we need to be sures it has not been used before.
      // JS allows the use of .1 and 1. so we leave it.
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
  // Formal the output.
  // Basically if the output is still null, we display 0.
  formatOutput(output) {
    if (output === null) {
      return 0;
    }
    return output;
  }
  render() {
    return (
      <div>
        <CalculatorContainer>
          <h1>My react calculator</h1>
          <OutputContainer>
            {this.formatOutput(this.state.output)}
          </OutputContainer>
          <DigiPad onInputTap={this.handleTap} />
        </CalculatorContainer>
      </div>
    );
  }
}
