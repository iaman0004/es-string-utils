import { endsWithAnyIgnoreCase } from "../utils";

describe('endsWithAnyIgnoreCase', () => {
  it('should return boolean value depedning upon if a string ends with specific set of chars', () => {
    expect(endsWithAnyIgnoreCase('string to be tested', ['Ed', 'be'])).toBeTrue();
    expect(endsWithAnyIgnoreCase('string to be tested with IGNORE CASE', ['case', 'e'])).toBeTrue();
    expect(endsWithAnyIgnoreCase('string to be tested', [])).toBeFalse();
  })
});
