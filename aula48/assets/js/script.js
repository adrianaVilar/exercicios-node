function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = function Inicia() {
    this.clique();
    this.enter();
  };

  this.enter = function Enter() {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.conta();
      }
    });
  };

  this.clear = function Clear() {
    this.display.value = "";
  };

  this.apagar = function Apagar() {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.conta = function Conta() {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert("Conta inválida");
        return;
      }

      this.display.value = String(conta);
    } catch (e) {
      alert("Conta inválida");
      return;
    }
  };

  this.clique = function Clique() {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        this.apresentar(el.innerText);
      }

      if (el.classList.contains("btn-clear")) {
        this.clear();
      }

      if (el.classList.contains("btn-del")) {
        this.apagar();
      }

      if (el.classList.contains("btn-eq")) {
        this.conta();
      }
    });
  };

  this.apresentar = function Apresentar(valor) {
    this.display.value += valor;
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
