import { sanityCheck } from "./sanity-check"

/**
 * Removes \r\n from end of the string
 * @param source 
 * @returns
 */
export const chop = (source: string) => {
  sanityCheck(source);
  
  return source.replace(/(\r\n|\n|\r|\t)*/gm, (c: string) => '');
}
