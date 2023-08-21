import { concat } from "../utils";

describe('concat', () => {
  it('should concat multiple string to form one string', () => {
    expect(concat()).toBe('');
    expect(concat('jocker', ' ', 'and', ' ', 'homelander')).toBe('jocker and homelander');
    expect(concat('romeo', ' ', 'juliet', ' were in', ' ', 'love')).toBe('romeo juliet were in love');
  })
});
