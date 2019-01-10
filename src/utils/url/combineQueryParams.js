import qs from 'qs';

export default function combineQueryParams(queryParams, options) {
  return qs.stringify(queryParams, { encode: false, ...options });
}
