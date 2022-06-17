import geraSenha from "./geradores";

const resultado = document.querySelector(".resultado");
const qdtCaracteres = document.querySelector(".qtd-caracteres");
const chkMaiusculas = document.querySelector(".chk-maiusculas");
const chkMinusculas = document.querySelector(".chk-minusculas");
const chkNumeros = document.querySelector(".chk-numeros");
const chkSimbolos = document.querySelector(".chk-simbolos");
const gerarSenhas = document.querySelector(".gerar-senha");

export default () => {
  gerarSenhas.addEventListener("click", () => {
    resultado.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    qdtCaracteres.value,
    chkMaiusculas.checked,
    chkMinusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked
  );

  return senha || "Nada selecionado";
}
