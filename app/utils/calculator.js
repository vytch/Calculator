const calculator = operator => {
  switch (operator) {
    case '+':
      return (a, b) => a * 1 + b * 1;
    case '-':
      return (a, b) => a - b;
    case '*':
      return (a, b) => a * b;
    case '/':
      return (a, b) => a / b;
    default:
      throw new Error('operator not supported');
  }
};

export { calculator };
