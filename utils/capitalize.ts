/**
 * Captialize a given string uses space for limiting string on default
 * 
 * @param {string} source to be capitalize
 * @param {string} delimiter saperator for the string from where we have to capitalize source
 * @returns {string} capitalized new string 
 */
export const capitalize = (source: string, delimiter: string = ' '): string => {
  if (!source || typeof source !== 'string') return source;
  return source?.split(delimiter).map((c: string) => {
    return c.slice(0, 1)?.toUpperCase() + c.slice(1)?.toLowerCase();
  }).join(delimiter);
}
