export const forEach = (array, callback, startIndex = 0) => {
  for (let i = startIndex; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
