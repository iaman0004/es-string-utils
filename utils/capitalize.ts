/**
 * 
 * @param source 
 * @returns 
 */
export const capitalize = (source: string) => {
  return source.replace(/^./g, (c: string) => {
    return c ? c.toUpperCase() : '';
  });
}
