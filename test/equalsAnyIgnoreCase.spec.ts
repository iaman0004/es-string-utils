import { equalsAnyIgnoreCase } from "../utils";

describe('equalsAnyIgnoreCase', () => {
  it('should compare if given string is equal to one of the target strings', () => {
    expect(equalsAnyIgnoreCase('homelander', ['doctor Strange', 'HomeLander', 'wonder woman'])).toBeTrue();
    expect(equalsAnyIgnoreCase('Wonder Woman', [])).toBeFalse();
    expect(equalsAnyIgnoreCase('thanos', ['Tony', 'Batsy'])).toBeFalse();
  });
});
