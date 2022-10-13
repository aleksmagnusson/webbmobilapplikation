var array1 = [3, 7, 1, 4];

function forst() {
  return array1[0];
}

function sist() {
  return array1[array1.length - 1];
}

//console.log(forst(array1));
//console.log(sist(array1));

console.log(array1);

console.log(
  ` Första värdet i arrayen är ${forst(
    array1
  )} och sista värdet i arrayen är ${sist(array1)}.`
);
