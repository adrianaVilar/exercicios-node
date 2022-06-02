//IIFE -> Immediately invoked function expression
(function (idade, peso, altura) {
  const sobrenome = "Vilar";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Adri"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(28, 47, 1.57);
