import { contains } from "../utils";

describe('contains', () => {
  it('should return position of first occurance of substring otherwise -1', () => {
    expect(contains('this can be used to evaluate A-train', 'homlander')).toBe(-1);
    expect(contains('Homelander is more powerful than Billy Butcher', 'Homelander')).toBe(0);
    expect(contains('But Soldier boy is deadly', 'DEADLY')).toBe(-1);
  })
});
