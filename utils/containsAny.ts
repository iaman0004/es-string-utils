import { contains } from "./contains";
import { sanityCheck } from "./sanity-check"

/**
 * 
 * @param source 
 * @param targets 
 * @returns 
 */
export const containsAny = (source: string, ...targets: string[]): boolean => {
  sanityCheck(source);

  let flag: boolean = false;
  for (const target of targets) {
    if (contains(source, target) !== -1) {
      flag = true;
      break;
    }
  }
  return flag;
}
