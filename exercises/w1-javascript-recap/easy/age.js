const object = { name: "Anna", age: 35 };

function logAge(data) {
  if (typeof data.age !== "undefined") console.log(data);
}

logAge(object);
logAge({ lastName: "Andersson" });
