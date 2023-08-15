import { endsWithAny } from "../utils";

describe('endsWithAny', () => {
  it('should return boolean value depedning upon if a string ends with specific set of chars', () => {
    expect(endsWithAny('string to be tested', ['ed', 'be'])).toBeTrue();
    expect(endsWithAny('string to be tested', ['de', 'be'])).toBeFalse();
    expect(endsWithAny('string to be tested', [])).toBeFalse();
  })
});
