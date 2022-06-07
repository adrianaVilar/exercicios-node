const objA = {
  chaveA: "A",
};

const objB = {
  chaveB: "B",
};

const objC = {
  chaveC: "C",
};

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.dir(objA.chaveA);
console.dir(objB.chaveA);
console.dir(objC.chaveA);
console.dir(objB.chaveB);
console.dir(objC.chaveC);
