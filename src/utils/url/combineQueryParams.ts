/* eslint-disable @typescript-eslint/no-explicit-any */
import qs from 'qs';

export default function combineQueryParams(
  queryParams: Record<string, any>,
  options?: qs.IStringifyOptions,
): string {
  return qs.stringify(queryParams, { encode: false, ...options });
}
