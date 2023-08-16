/**
 * Camelize a given string, uses _ & - as delimitter
 * 
 * @param {string} source to be capitalized 
 * @returns {string} capitalized string
 */
export const camelize = (source: string): string => {
  if (!source || typeof source !== 'string') return source;
  source = source.replace(/[-_\s]+(.)?/g, (c: string) => {
    return c.length ? c.charAt(c.length - 1).toLocaleUpperCase() : '';
  })
  return source.slice(0, 1).toLocaleLowerCase() + source.slice(1);
}
