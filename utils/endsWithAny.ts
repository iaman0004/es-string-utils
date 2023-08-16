/**
 * Determines if a string contains certain set of chars / substrings
 * 
 * @param {string} source which has to be validated against validators
 * @param {string[]} targets array of validators to be validated
 * @returns {boolean} given source string ends with one of the targets
 */
export const endsWithAny = (source: string, targets: Array<string>): boolean => {
  if (!source || typeof source !== 'string') return false;
  const memo: Map<number, string> = new Map();
  for (let i = 0; i<targets.length; i++) {
    if (!memo.has(targets[i].length)) {
      memo.set(targets[i].length, source.slice(source.length - targets[i].length));
    }
    if (memo.get(targets[i].length) === targets[i]) return true;
  }
  return false;
}
