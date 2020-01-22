import qs, { IStringifyOptions } from 'qs';

export default function combineQueryParams(
  queryParams: object,
  options?: IStringifyOptions,
): string {
  return qs.stringify(queryParams, { ...options, encode: false });
}
