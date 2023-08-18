import { equals } from "./equals";

/**
 * Checks the equality of two strings character by character ignoring the case
 * 
 * @param {string} source which has to be validated
 * @param {string} target to be validated against
 * @returns {boolean} two strings are equal or not
 */
export const equalsIgnoreCase = (source: string, target: string): boolean => {
  if (!source || typeof source !== 'string') return false;
  if (!target || typeof target !== 'string') return false;
  return equals(source.toLocaleLowerCase(), target.toLocaleLowerCase());
}
