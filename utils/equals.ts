/**
 * Checks the equality of two strings character by character and is case sensitive in nature
 * 
 * @param {string} source which has to be validated
 * @param {string} target to be validated against
 * @returns {boolean} two strings are equal or not
 */
export const equals = (source: string, target: string) => {
  if (!source || typeof source !== 'string') return false;
  if (!target || typeof target !== 'string') return false;
  if (source.length !== target.length) return false;
  
  for (let i = 0; i<source.length; i++) {
    if (target.charCodeAt(i) !== source.charCodeAt(i)) return false;
  }
  return true;
}
