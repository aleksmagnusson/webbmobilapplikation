let array = [2, 3, 4, 5];
let arrayName = ["Easy", "Peasy", "Lemon", "Squeezy"];

function oddArray(numInd) {
  return numInd.filter((element, index) => index % 2 < 1);
}

function oddName(nameInd) {
  return nameInd.filter((element, index) => index % 2 < 1);
}

// Med tolkning att index startar 1 från 2 respektive "Easy". =>
// resultat[2, 4] och ["Easy", "Lemon"].

console.log(oddArray(array));

console.log(oddName(arrayName));
