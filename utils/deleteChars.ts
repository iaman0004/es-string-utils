/**
 * Used to delete a set of characters from a string and returns a new string
 * 
 * @param {string} source from which we need to delete chars/set of chars
 * @param {string[]} targets characters/substrings to be deleted from parent string 
 * @returns {string} with omitted target chars/substrings
 */
export const deleteChars = (source: string, targets: string[]): string => {
  if (!source || typeof source !== 'string') return source;
  const rx = new RegExp(targets.join('|'), 'g');
  return source.replace(rx, '');
}
