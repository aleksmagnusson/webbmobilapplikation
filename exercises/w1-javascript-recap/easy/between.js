//  Räkna ut mellanliggande värde.
function mittEmellan(x, from, to) {
  if (x > from && x < to) {
    return x;
  } else {
    console.log(`"Värdet ${x} ligger inte emellan ${from} och ${to}"`);
  }
}
console.log(mittEmellan(4, 1, 10));
