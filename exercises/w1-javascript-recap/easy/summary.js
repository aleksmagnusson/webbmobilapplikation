// Array med nummer.
let sum1 = [6, 8];
let sum2 = [2, 3, 4, 5];

// Funktionen .reduce(element) som opererar på varje element i arrayen nedanför.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

function sum(array) {
  return array.reduce((a, b) => a + b);
}

console.log(sum(sum1)); // => 14
console.log(sum(sum2)); // => 14
