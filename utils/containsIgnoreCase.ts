import { contains } from "./contains";
import { sanityCheck } from "./sanity-check"

/**
 * 
 * @param source 
 * @param target 
 * @returns 
 */
export const containsIgnoreCase = (source: string, target: string): number => {
  sanityCheck(source, target);

  return contains(source, target, false);
}
