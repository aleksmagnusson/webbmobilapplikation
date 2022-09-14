function isBetween(a, b, c) {
  if (a > b && a < c) {
    return a;
  } else {
    console.log("Det här var klurigt");
  }
}

console.log(isBetween(3, 1, 4));

// Bättre lösning finns.
