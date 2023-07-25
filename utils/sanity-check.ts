export const sanityCheck = (source : any) => {
  if (typeof source !== 'string') {
    throw new Error(`Expected string but got ${typeof source}`)
  }
}