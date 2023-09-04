import { isAllBlank } from "../utils";

describe('isAllBlank', () => {
  it('should check from the strings if all are blank or not', () => {
    expect(isAllBlank('', undefined, null)).toBeTrue();
    expect(isAllBlank(' ', '')).toBeFalse();
    expect(isAllBlank(undefined, null, 'Kick')).toBeFalse();
  })
});
