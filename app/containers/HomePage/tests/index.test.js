import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains('My react calculator')).toEqual(true);
  });
  it('has a state', () => {
    const renderedComponent = shallow(<HomePage />);
    const state = renderedComponent.state();
    expect(state.output).toBeDefined();
    expect(state.firstOperand).toBeDefined();
    expect(state.secondOperand).toBeDefined();
  });
  describe('has an updateOperand function that', () => {
    let renderedComponent = null;
    beforeEach(() => {
      renderedComponent = shallow(<HomePage />);
    });
    it('is defined', () => {
      expect(renderedComponent.instance().updateOperand).toBeDefined();
    });
    it('updates the first operand if no operation is set', () => {
      expect(renderedComponent.state().firstOperand).toBeNull();
      expect(renderedComponent.state().secondOperand).toBeNull();
      expect(renderedComponent.state().operator).toBeNull();
      renderedComponent.instance().updateOperand('1');
      expect(renderedComponent.state().firstOperand).toEqual('1');
      expect(renderedComponent.state().secondOperand).toBeNull();
      expect(renderedComponent.state().operator).toBeNull();
      renderedComponent.instance().updateOperand('1');
      expect(renderedComponent.state().firstOperand).toEqual('11');
      expect(renderedComponent.state().secondOperand).toBeNull();
      expect(renderedComponent.state().operator).toBeNull();
    });
    it('does not update if we have 2 dots in any operand', () => {
      renderedComponent.instance().updateOperand('.');
      renderedComponent.instance().updateOperand('1');
      renderedComponent.instance().updateOperand('.');
      expect(renderedComponent.state().firstOperand).toEqual('.1');
    });
  });
  describe('has an updateOperator function that', () => {
    let renderedComponent = null;
    beforeEach(() => {
      renderedComponent = shallow(<HomePage />);
    });
    it('is defined', () => {
      expect(renderedComponent.instance().updateOperator).toBeDefined();
    });
    it('does not update if the first operand value is still null', () => {
      renderedComponent.instance().updateOperator('+');
      expect(renderedComponent.state().operator).toBeNull();
    });
    it('updates the value of the operator if the first operand has a value', () => {
      renderedComponent.instance().updateOperand('1');
      renderedComponent.instance().updateOperator('+');
      expect(renderedComponent.state().operator).toEqual('+');
    });
    it('does update if called more than once in a row', () => {
      renderedComponent.instance().updateOperand('1');
      renderedComponent.instance().updateOperator('+');
      expect(renderedComponent.state().operator).toEqual('+');
      renderedComponent.instance().updateOperator('*');
      expect(renderedComponent.state().operator).toEqual('*');
    });
    it('allows the editoing of the second operand', () => {
      renderedComponent.instance().updateOperand('1');
      renderedComponent.instance().updateOperator('+');
      renderedComponent.instance().updateOperand('1');
      expect(renderedComponent.state().firstOperand).toEqual('1');
      expect(renderedComponent.state().operator).toEqual('+');

      expect(renderedComponent.state().secondOperand).toEqual('1');
      renderedComponent.instance().updateOperand('1');
      expect(renderedComponent.state().firstOperand).toEqual('1');
      expect(renderedComponent.state().secondOperand).toEqual('11');
    });
    it('does not anything if the first operand is just a .', () => {
      renderedComponent.instance().updateOperand('.');
      renderedComponent.instance().updateOperator('+');
      expect(renderedComponent.state().firstOperand).toEqual('.');
      expect(renderedComponent.state().operator).toBeNull();
    });
    it('does not anything if the second operand is not null', () => {
      renderedComponent.instance().updateOperand('1');
      renderedComponent.instance().updateOperator('+');
      renderedComponent.instance().updateOperand('1');
      renderedComponent.instance().updateOperator('-');
      expect(renderedComponent.state().firstOperand).toEqual('1');
      expect(renderedComponent.state().operator).toBe('+');
      expect(renderedComponent.state().secondOperand).toEqual('1');
    });
  });
  describe('has an output that', () => {
    it('displays the first operand when everything else is null', () => {
      const renderedComponent = shallow(<HomePage />);
      renderedComponent.instance().updateOperand('1');
      expect(renderedComponent.state().output).toEqual('1');
    });
  });
  describe('has an equal that', () => {
    let renderedComponent = null;
    it('does nothing if no operation is picked ', () => {
      renderedComponent = shallow(<HomePage />);
      const instance = renderedComponent.instance();
      instance.processCalculator('=');
    });
    describe('when the second operand is just a .', () => {
      it('does nothing', () => {
        renderedComponent = shallow(<HomePage />);
        const instance = renderedComponent.instance();
        instance.updateOperand('1');
        instance.updateOperator('+');
        instance.updateOperand('.');
        instance.processCalculator('=');
        expect(renderedComponent.state().firstOperand).toEqual('1');
        expect(renderedComponent.state().operator).toBe('+');
        expect(renderedComponent.state().secondOperand).toEqual('.');
        expect(renderedComponent.state().output).toBe('.');
      });
    });
    describe('with value', () => {
      beforeEach(() => {
        renderedComponent = shallow(<HomePage />);
        const instance = renderedComponent.instance();
        instance.updateOperand('1');
        instance.updateOperator('+');
        instance.updateOperand('3');
        instance.processCalculator('=');
      });
      it('process the operation', () => {
        const state = renderedComponent.state();
        expect(state.output).toEqual(4);
      });
      it('reset the calculator once it has processed', () => {
        const state = renderedComponent.state();
        expect(state.output).toEqual(4);
        expect(state.firstOperand).toBeNull();
        expect(state.operator).toBeNull();
        expect(state.secondOperand).toBeNull();
      });
    });
  });
  describe('has an reset that', () => {
    let renderedComponent = null;
    let instance = null;
    beforeEach(() => {
      renderedComponent = shallow(<HomePage />);
      instance = renderedComponent.instance();
      instance.updateOperand('1');
      instance.updateOperator('+');
      instance.updateOperand('3');
      instance.processCalculator('=');
    });
    it('clears the calculator', () => {
      instance.processCalculator('C');
      const state = renderedComponent.state();

      expect(state.firstOperand).toBeNull();
      expect(state.operator).toBeNull();
      expect(state.secondOperand).toBeNull();
      expect(state.output).toBeNull();
    });
  });
  describe('after an operation', () => {
    let renderedComponent = null;
    let instance = null;
    beforeEach(() => {
      renderedComponent = shallow(<HomePage />);
      instance = renderedComponent.instance();
      instance.updateOperand('1');
      instance.updateOperator('+');
      instance.updateOperand('3');
      instance.processCalculator('=');
    });
    it('can reuse the output for more operation', () => {
      expect(renderedComponent.state().output).toEqual(4);
      expect(renderedComponent.state().firstOperand).toBeNull();
      expect(renderedComponent.state().operator).toBeNull();
      expect(renderedComponent.state().secondOperand).toBeNull();

      instance.updateOperator('+');
      expect(renderedComponent.state().firstOperand).toEqual('4');
      expect(renderedComponent.state().operator).toEqual('+');
    });
  });
});
