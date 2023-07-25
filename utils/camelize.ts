/**
 * 
 * @param source 
 * @returns 
 */
export const camelize = (source: string) => {
  if (typeof source !== 'string') {
    throw new Error(`Expected string but got ${typeof source}`)
  }
  return source.replace(/[-_\s]+(.)?/g, (c: string) => {
    return c?.toUpperCase() ?? ''
  })
}
