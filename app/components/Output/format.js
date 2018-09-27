// Formal the output.
// Basically if the output is still null, we display 0.

export const formatOutput = output => {
  if (output === null) {
    return 0;
  }
  return output;
};
