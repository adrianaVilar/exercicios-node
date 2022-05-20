//Primitivos (imutáveis):

let a = 5;
let b = a;

console.log(a, b);

a = "Outra coisa";

console.log(a, b);

//Referência (mutáveis):

let c = [1, 2, 3];
let d = c;
let e = [...c]; //Spread

console.log(c, d, e);

e.push(4);
d.pop();
console.log(c, d, e);
