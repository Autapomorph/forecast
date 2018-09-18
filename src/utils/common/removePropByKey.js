export default function removePropByKey(obj, deleteKey) {
  return Object.keys(obj)
    .filter(objKey => objKey !== deleteKey)
    .reduce((result, current) => {
      result[current] = obj[current]; // eslint-disable-line no-param-reassign
      return result;
    }, {});
}
