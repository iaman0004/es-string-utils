/**
 * Check if a string contains a set of characters as substring and return the first occurance
 * position of element  
 * 
 * @param {string} source which has to be validated for substring  
 * @param {string} target validator to validated against source string 
 * @returns {number} position of first occurence of substring otherwise -1
 */
export const contains = (source: string, target: string, caseSensitive: boolean = true): number => {
  if (!source || typeof source !== 'string') return -1;
  if (!target || typeof target !== 'string') return -1;
  return (caseSensitive ? source : source.toLocaleLowerCase()).indexOf(caseSensitive ? target : target.toLocaleLowerCase());
}
