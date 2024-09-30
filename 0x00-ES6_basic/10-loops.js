export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const newValue = appendString + value;
    array[array.indexOf(value)] = newValue;
  }

  return array;
}
