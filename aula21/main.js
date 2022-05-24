const pontuacaoUsuario = 999;
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";
console.log(nivelUsuario);

const corEscolhidaPeloUsuario = null;
const corPadrao = "Preto";
const corUsuario = corEscolhidaPeloUsuario || corPadrao;
console.log(corUsuario);
