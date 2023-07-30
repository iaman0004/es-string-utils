/**
 * This will return the concatenated string from a set of different strings
 * @param {string[]} sources contains a number of strings to be concatenated 
 * @returns concatenated string
 */
export const concat = (...sources: string[]): string => {
  let final: string = '';
  for (const source of sources) {
    final += (source ? source : '');
  }
  return final;
}
