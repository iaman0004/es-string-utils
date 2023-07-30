import { contains } from "./contains";
import { sanityCheck } from "./sanity-check"

/**
 * 
 * @param source 
 * @param targets 
 * @returns 
 */
export const containsNone = (source: string, ...targets: string[]) => {
  sanityCheck(source);

  let flag: boolean = true;
  for (const target of targets) {
    if (contains(source, target) !== -1) {
      flag = false;
      break;
    }
  }
  return flag;
}
