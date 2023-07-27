export const sanityCheck = (...sources : any[]) => {
  for (const source of sources) {
    if (typeof source !== 'string') {
      throw new Error(`Expected string but got ${typeof source}`)
    }
  }
}