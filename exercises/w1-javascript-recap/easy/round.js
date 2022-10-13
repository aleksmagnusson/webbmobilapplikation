/**
 * Avrundning till närmaste heltal. "Math.round()".
 */

let decimaltal1 = 7.8;
let decimaltal2 = 1.1;
let decimaltal3 = 1.5;

function round(decimaltal) {
  return Math.round(decimaltal);
}

console.log(`${decimaltal1} avrundas till ${round(decimaltal1)}`);
console.log(`${decimaltal2} avrundas till ${round(decimaltal2)}`);
console.log(`${decimaltal3} avrundas till ${round(decimaltal3)}`);
