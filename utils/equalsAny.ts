import { equals } from "./equals";

/**
 * Checks if the any of the string from the set of string is equivalent to source string
 * 
 * @param {string} source which has to be validated for equality
 * @param {string[]} targets the number of validators to be validated for equality
 * @returns {boolean} if source is equal to any of string from targets
 */
export const equalsAny = (source: string, ...targets: string[]): boolean => {
  if (!source || typeof source !== 'string') return false;
  if (!targets?.length) return false;
  
  for (const target of targets) {
    if (equals(source, target)) return true;
  }

  return false;
}