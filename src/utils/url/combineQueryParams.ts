import qs, { IStringifyOptions } from 'qs';

export default function combineQueryParams(
  // eslint-disable-next-line @typescript-eslint/ban-types
  queryParams: object,
  options?: IStringifyOptions,
): string {
  return qs.stringify(queryParams, { ...options, encode: false });
}
