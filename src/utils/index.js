export const combineStrings = (...arr) => {
  return arr.filter((str) => str).join();
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
