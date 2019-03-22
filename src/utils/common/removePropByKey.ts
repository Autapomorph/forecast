/* eslint-disable @typescript-eslint/no-explicit-any */
export default function removePropByKey(
  obj: Record<string, any>,
  deleteKey: string,
): Record<string, any> {
  return Object.keys(obj)
    .filter((objKey: string) => objKey !== deleteKey)
    .reduce((result: Record<string, any>, current: string): Record<string, any> => {
      result[current] = obj[current]; // eslint-disable-line no-param-reassign
      return result;
    }, {});
}
