import { contains } from "./contains";

/**
 * Validate and returns if from array of charcters or substrings any one is present in the
 * source string
 * 
 * @param {string} source string which has to be validated 
 * @param {Array<string>} targets array of characters/substrings against which source has to validated 
 * @returns {boolean} if source string contains any one of the characters/substrings
 */
export const containsAny = (source: string, ...targets: string[]): boolean => {
  if (typeof source !== 'string' || !source?.length) return false;
  if (!targets?.length) return false;

  let flag: boolean = false;
  for (const target of targets) {
    if (contains(source, target) !== -1) {
      flag = true;
      break;
    }
  }
  return flag;
}
