import { countMatches } from "../utils"

describe('Count Matches', () => {
  it('should return total occurances of substring', () => {
    expect(countMatches('Stringtobevalidated', 'a')).toEqual(2);
    expect(countMatches('sdfnigdg o ogsgpdgdsgadsg', 'sg')).toEqual(3);
  })
})
