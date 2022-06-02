//Factory Function (fábrica) != Constructor function (construtora)
function criaPessoa(nome, sobrenome, peso, altura) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //Setter: altera
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala(assunto) {
      return `${this.nome} está falando sobre ${assunto}.`;
    },

    altura,
    peso,

    //Getter: faz com que o método funcione como atributo do objeto
    get imc() {
      const index = peso / altura ** 2;
      return index.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Adri", "Vilar", 47, 1.57);

console.log(p1.fala("JS"));
console.log(p1.imc);
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);

p1.nomeCompleto = "Adriana Corrêa Vilar";

console.log(p1.fala("JS"));
console.log(p1.imc);
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
