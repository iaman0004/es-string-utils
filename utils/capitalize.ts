/**
 * 
 * @param source 
 * @param delimiter 
 * @returns 
 */
export const capitalize = (source: string, delimiter: string = ' ') => {
  if (!source || typeof source !== 'string') return source;
  return source?.split(delimiter).map((c: string) => {
    return c.slice(0, 1)?.toUpperCase() + c.slice(1)?.toLowerCase();
  }).join(delimiter);
}
