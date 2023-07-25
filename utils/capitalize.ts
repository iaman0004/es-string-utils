/**
 * 
 * @param source 
 * @returns 
 */
export const capitalize = (source: string, delimiter: string = ' ') => {
  if (typeof source !== 'string') {
    throw new Error(`Expected string but got ${typeof source}`)
  }
  return source?.split(delimiter).map((c: string) => {
    return c.slice(0, 1)?.toUpperCase() + c.slice(1)?.toLowerCase();
  }).join(delimiter);
}
