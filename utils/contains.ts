import { sanityCheck } from "./sanity-check"

/**
 * 
 * @param source 
 * @param target 
 * @returns 
 */
export const contains = (source: string, target: string, caseSensitive: boolean = true): number => {
  sanityCheck(source, target);
  return (caseSensitive ? source : source.toLocaleLowerCase()).indexOf(caseSensitive ? target : target.toLocaleLowerCase());
}
