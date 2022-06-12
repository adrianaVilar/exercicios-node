function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Cai no ERRO");
        return;
      }

      resolve(msg.toUpperCase() + " - Passei na promise");
      return;
    }, tempo);
  });
}

const promises = [
  "Primeiro valor",
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 500),
  esperaAi("Promise 3", 1000),
  "Outro valor",
];

Promise.all(promises)
  .then((valor) => console.log(valor))
  .catch((erro) => console.log(erro));
