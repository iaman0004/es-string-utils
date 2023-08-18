import { equals } from "../utils";

describe('equals', () => {
  it('should return if two strings are equal', () => {
    expect(equals('check equal', 'check equal')).toBeTrue();
    expect(equals('not equal', 'Not equal')).toBeFalse();
    expect(equals('checking if this is equal', 'nope it is not')).toBeFalse();
  })
});
