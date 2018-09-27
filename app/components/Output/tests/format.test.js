import { formatOutput } from '../format';

describe(' formatOutput ', () => {
  it('is defined', () => {
    expect(formatOutput).toBeDefined();
  });
  it('displays 0 if the passed null', () => {
    expect(formatOutput(null)).toEqual(0);
  });
  it('displays anything else', () => {
    expect(formatOutput('1')).toEqual('1');
    expect(formatOutput(3)).toEqual(3);
  });
});
