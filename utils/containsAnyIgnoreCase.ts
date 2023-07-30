import { contains } from "./contains";
import { sanityCheck } from "./sanity-check"

export const containsAnyIgnoreCase = (source: string, ...targets: string[]): boolean => {
  sanityCheck(source);

  let flag: boolean = false;
  for (const target of targets) {
    if (contains(source, target, false) !== -1) {
      flag = true;
      break;
    }
  }
  return flag;
}
