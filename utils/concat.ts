/**
 * This will return the concatenated string from a set of different strings
 * 
 * @param {string[]} sources contains a number of strings to be concatenated 
 * @returns {string} concatenated new string
 */
export const concat = (...sources: string[]): string => {
  if (!sources?.length) return '';
  let final: string = '';
  for (const source of sources) {
    final += (source ? source : '');
  }
  return final;
}
