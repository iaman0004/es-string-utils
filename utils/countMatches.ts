/**
 * Counts the instance of occurances of substring within the string
 * 
 * @param {string} source parent string in which we need to search substring 
 * @param {string} target substring which has to be searched within source string
 * @returns {number} number of occurances
 */
export const countMatches = (source: string, target: string): number => {
  if (!source || typeof source !== 'string' || !source || typeof source !== 'string' || target.length > source.length) return 0;

  let count = 0;
  for (let i = 0; i<source.length - target.length + 1; i++) {
    const substr = source.slice(i, i + target.length);
    if (substr === target) count++;
  }
  return count;
}
