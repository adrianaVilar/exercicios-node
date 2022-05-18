const nome = "Adriana";
const sobrenome = "Vilar";
const idade = 28;
const peso = 47;
const altura = 1.57;
let imc = peso / (altura * altura);
let anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} m de altura e seu IMC é ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
