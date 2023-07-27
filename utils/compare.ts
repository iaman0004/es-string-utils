import { sanityCheck } from "./sanity-check";

/**
 * Compare two strings lexicographically and returns a number indicating
 * which one of the source or target is bigger/small or are equal
 * @param {string} source
 * @param {string} target 
 * @returns 0 if both string equal | > 0 if first string is bigger |
 * < 0 if second string is bigger
 */
export const compare = (source: string, target: string): number => {
  sanityCheck(source, target);
  
  if (source.length !== target.length) return source.length - target.length;

  for (let i = 0; i<source.length && i<target.length; i++) {  
    let a = source.charCodeAt(i);
    let b = target.charCodeAt(i);

    if (a === b) {
      continue;
    } else {
      return a - b;
    }
  }

  return 0;
}
