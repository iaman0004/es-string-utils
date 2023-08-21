import { equalsAny } from "../utils";

describe('equalsAny', () => {
  it('should check and return boolean value if a string is equal to any of the given string', () => {
    expect(equalsAny('application', 'app', 'jocker', 'application')).toBeTrue();
    expect(equalsAny('appication')).toBeFalse();
    expect(equalsAny('', 'true')).toBeFalse();
    expect(equalsAny('jocker', 'superman', 'homelander', 'soldier boy')).toBeFalse();
  })
});
