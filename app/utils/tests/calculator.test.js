import { calculator } from '../calculator';

describe('my calculator factory', () => {
  it('should have a get method', () => {
    expect(calculator).toBeDefined();
  });
  describe('has a plus function that', () => {
    it('is defined', () => {
      expect(typeof calculator('+')).toBe('function');
    });
    it('adds numbers', () => {
      expect(calculator('+')(1, 2)).toBe(3);
    });
    it('adds numbers that are strings', () => {
      expect(calculator('+')('1', '2')).toBe(3);
    });
  });
  describe('has a plus function that', () => {
    it('is defined', () => {
      expect(typeof calculator('-')).toBe('function');
    });
    it('substracts numbers', () => {
      expect(calculator('-')(3, 2)).toBe(1);
    });
    it('adds numbers that are strings', () => {
      expect(calculator('-')('3', '2')).toBe(1);
    });
  });
  describe('has a multiply function that', () => {
    it('is defined', () => {
      expect(typeof calculator('*')).toBe('function');
    });
    it('multiply numbers', () => {
      expect(calculator('*')(3, 2)).toBe(6);
    });
    it('adds numbers that are strings', () => {
      expect(calculator('*')('3', '2')).toBe(6);
    });
  });
  describe('has a divide function that', () => {
    it('is defined', () => {
      expect(typeof calculator('/')).toBe('function');
    });
    it('multiply numbers', () => {
      expect(calculator('/')(6, 2)).toBe(3);
    });
    it('adds numbers that are strings', () => {
      expect(calculator('/')('6', '2')).toBe(3);
    });
  });
});
