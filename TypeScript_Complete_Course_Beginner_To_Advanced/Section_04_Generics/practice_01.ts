const map = <T, U>(array: T[], func: (item: T) => U[]) => {
  if (array.length === 0) {
    return array;
  }

  const result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = func(array[i]);
  }
  return result;
};

let numbers = [4, 5, 6, 7, 8];
const converted = map(numbers, (number) => number.toString());

console.log(converted);
