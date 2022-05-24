function escopoDaCalculadora() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  const erro = document.querySelector(".erro");

  function calculadoraDeImc(evento) {
    evento.preventDefault();

    let peso = form.querySelector("#input-peso");
    peso = peso.value;
    let altura = form.querySelector("#input-altura");
    altura = altura.value;
    let imc = peso / (altura * altura);
    imc = Number(imc.toFixed(1));
    let legenda;

    console.log(peso);
    console.log(altura);
    console.log(imc);

    if (peso > 650 || peso < 0) {
      legenda = "Digite um peso válido.";
      erro.innerHTML = `<p> ${legenda}</p>`;
    } else {
      if (altura > 2.5 || altura < 0) {
        legenda = "Digite uma altura válida.";
        erro.innerHTML = `<p> ${legenda}</p>`;
      } else {
        if (imc < 18.5) {
          legenda = "Abaixo do peso";
        } else if (imc >= 18.5 && imc <= 24.9) {
          legenda = "Peso normal";
        } else if (imc >= 25 && imc <= 29.9) {
          legenda = "Sobrepeso";
        } else if (imc >= 30 && imc <= 34.9) {
          legenda = "Obesidade grau 1";
        } else if (imc >= 35 && imc <= 39.9) {
          legenda = "Obesidade grau 2";
        } else if (imc > 40) {
          legenda = "Obesidade grau 3";
        }
        resultado.innerHTML = `<p> Seu IMC é ${imc} (${legenda})</p>`;
      }
    }
  }
  form.addEventListener("submit", calculadoraDeImc);
}
escopoDaCalculadora();
