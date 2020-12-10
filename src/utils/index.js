export const combineStrings = (...arr) => {
  return arr.filter((str) => str).join();
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getUniqueObjects(arr, key) {
  return arr
    .map((value) => value[key])
    .filter((value, index, _arr) => _arr.indexOf(value) == index);
}
