export const endsWithAnyIgnoreCase = (source: string, targets: string[]) => {
  if (!source || typeof source !== 'string') return false;
  source = source.toLocaleLowerCase();
  const memo: Map<number, string> = new Map();
  for (let i = 0; i<targets.length; i++) {
    if (!memo.has(targets[i].length)) {
      memo.set(targets[i].length, source.slice(source.length - targets[i].length));
    }
    if (memo.get(targets[i].length) === targets[i].toLocaleLowerCase()) return true;
  }
  return false;
}
