/* eslint-disable @typescript-eslint/no-explicit-any */
export default function omitProps<O extends Record<string, any>, K extends keyof O>(
  obj: O,
  keys: K | K[],
): Omit<O, K> {
  type KeysSet = Set<K | keyof O>;
  type OriginalKeys = (keyof O)[];

  const keysSet: KeysSet = Array.isArray(keys) ? new Set(keys) : new Set([keys]);
  const originalKeys: OriginalKeys = Object.keys(obj);

  return originalKeys.reduce((result, keyName) => {
    if (!keysSet.has(keyName)) {
      result[keyName] = obj[keyName]; // eslint-disable-line no-param-reassign
    }
    return result;
  }, {} as O);
}
