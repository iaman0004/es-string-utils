import { equalsIgnoreCase } from "./equalsIgnoreCase";

/**
 * Compares source string with the list of target strings ignoring the case of string
 * 
 * @param {string} source which has to be validated for equality
 * @param {string[]} targets the number of validators to be validated for equality
 * @returns {boolean} if source is equal to any of string from targets
 */
export const equalsAnyIgnoreCase = (source: string, targets: string[]): boolean => {
  if (!source || typeof source !== 'string') return false;
  if (!targets?.length) return false;
  
  for (const target of targets) {
    if(equalsIgnoreCase(source, target)) return true;
  }
  return false;
}
