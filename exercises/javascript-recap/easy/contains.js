const items = ["Banan", "Kiwi", "Citron"];

function contains(array, value) {
  if (array.includes(value)) return `${value} finns i arrayen`;
  else {
    return `${value} existerar inte i arrayen`;
  }
}

console.log(contains(items, "Kiwi"));

/**
 const itams = ["sprit", "grogg", "fanta"];
 function contains(array, value) {
   if (array.includes(value)) return `${value} exists in that array`;
   else {
     return `${value} does not exist in that array`;
   }
 }
 console.log(contains(itams, "spritt"));
 */
