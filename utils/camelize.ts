/**
 * 
 * @param source 
 * @returns 
 */
export const camelize = (source: string) => {
  source.replace(/[-_\s]+(.)?/g, (c: string) => {
    return c?.toUpperCase() ?? ''
  })
}
