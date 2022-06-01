function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}
const funcao = retornaFuncao();
const funcao1 = retornaFuncao("Adri");
console.log(funcao);
console.log(funcao());
console.log(funcao1());
