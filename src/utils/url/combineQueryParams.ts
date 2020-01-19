import qs from 'qs';

export default function combineQueryParams(
  queryParams: object,
  options?: qs.IStringifyOptions,
): string {
  return qs.stringify(queryParams, { encode: false, ...options });
}
