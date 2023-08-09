/**
 * Output if a string contains only set of characters | it compares character by character and 
 * not the complete string
 * 
 * @param {string} source string which has to be validated 
 * @param {string} target set of chars in string format act as validator
 * @returns {boolean} source string contains only target string chars
 */
export const containsOnly = (source: string, target: string): boolean => {
  if (!source || typeof source !== 'string') return false;
  if (!target || typeof target !== 'string') return false;
  if (source.trim().length === 0) return true;

  const _target: Map<number, boolean> = new Map();
  for (let i = 0; i<target.length; i++) {
    const code = target.charCodeAt(i);
    _target.set(code, true);
  }

  for (let i = 0; i<source.length; i++) {
    const code = source.charCodeAt(i);
    if (!_target.has(code)) return false;
  }
  return true;
}
