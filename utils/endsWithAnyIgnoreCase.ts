/**
 * Determines weather a string ends with certain set of characters or string ignoring the case of string
 * 
 * @param {string} source which has to be validated against validators 
 * @param {string[]} targets these are validators
 * @returns {boolean} if the source string ends with one of the targets ignoring it's case
 */
export const endsWithAnyIgnoreCase = (source: string, targets: string[]): boolean => {
  if (!source || typeof source !== 'string') return false;
  source = source.toLocaleLowerCase();
  const memo: Map<number, string> = new Map();
  for (let i = 0; i<targets.length; i++) {
    if (!memo.has(targets[i].length)) {
      memo.set(targets[i].length, source.slice(source.length - targets[i].length));
    }
    if (memo.get(targets[i].length) === targets[i].toLocaleLowerCase()) return true;
  }
  return false;
}
