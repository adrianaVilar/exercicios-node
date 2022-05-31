function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000); // Não para de executar se não mandar parar

setTimeout(function () {
  clearInterval(timer);
}, 3000); // Função para parar a anterior depois de 3 segundos

setTimeout(function () {
  console.log("Olá!");
}, 5000); // Função para escrever depois de 5 segundos
