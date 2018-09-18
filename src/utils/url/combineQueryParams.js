import qs from 'qs';

export default function combineQueryParams(queryParamsObject) {
  return qs.stringify(queryParamsObject, { encode: false });
}
