/**
 * Check and return 
 * 
 * @param targets 
 * @returns 
 */
export const isAllBlank = (...targets: string[]): boolean => {
  if (!targets?.length) return true;

  for (const target of targets) {
    if (target !== '' && target !== null && target !== undefined) return false 
  }
  return true;
}
