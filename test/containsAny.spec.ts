import { containsAny } from '../utils/containsAny';

describe('containsAny', () => {
  it('should return true in case of string contains any of the given compartor', () => {
    expect(containsAny('This is it', 'it', 'not')).toBeTrue();
    expect(containsAny('This is not matching', 'l')).toBeFalse();
  })
});
