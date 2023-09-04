/**
 * Check and return if all the strings are empty or not
 * 
 * @param {string[]} targets list of strings to be validated 
 * @returns {boolean}
 */
export const isAllBlank = (...targets: string[]): boolean => {
  if (!targets?.length) return true;

  for (const target of targets) {
    if (target !== '' && target !== null && target !== undefined) return false 
  }
  return true;
}
