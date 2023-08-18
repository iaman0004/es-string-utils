import { equalsIgnoreCase } from "../utils";

describe('equalsIgnoreCase', () => {
  it('should check if two strings are equal when not case sensitive', () => {
    expect(equalsIgnoreCase('These are equal', 'these are equal')).toBeTrue();
    expect(equalsIgnoreCase('this is not equal', 'nope doesn\'t seems so')).toBeFalse();
    expect(equalsIgnoreCase('lolllllll', 'LoLLLLLLL')).toBeTrue();
  })
});
