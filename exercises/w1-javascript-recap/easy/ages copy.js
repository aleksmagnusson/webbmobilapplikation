let person1 = { name: "Aleks", age: 26 };
let person2 = { name: "Eva", age: 66 };
let person3 = { name: "Torkel" };

let personArray = [person1, person2, person3];

function getAges() {
  if (person1.age !== undefined) console.log(person1.age);
  if (person2.age !== undefined) console.log(person2.age);
  if (person3.age !== undefined) console.log(person3.age);
}
// return Array.from(person1.age, person2.age, person3.age);

// console.log(person1.age, person2.age, person3.age);
getAges(personArray);
