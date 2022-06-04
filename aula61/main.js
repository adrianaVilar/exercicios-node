//Objetos

const pessoa1 = new Object();
pessoa1.nome = "Adriana";
pessoa1.sobrenome = "Vilar";
pessoa1.idade = 28;

pessoa1.falarIdade = function () {
  return `${this.nome} está falando que nasceu em ${this.getDataNascimento()}.`;
};

pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  const anoNascimento = dataAtual.getFullYear() - pessoa1.idade;
  return anoNascimento;
};

console.log(pessoa1.falarIdade());
