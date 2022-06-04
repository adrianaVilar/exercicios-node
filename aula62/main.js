//Função que cria objetos: factory function, constructor function ou classes

//Factory
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}
const p1 = criaPessoa("Adriana", "Vilar");
console.log(p1.nomeCompleto);

//Constructor
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this); //Imutabilidade
}

const p2 = new Pessoa("Adri", "Vilar");
p2.sobrenome = "Silva"; //Não vai alterar, pq o this foi congelado
const p3 = new Pessoa("Ana", "Vilar");
console.log(p2);
console.log(p3);
