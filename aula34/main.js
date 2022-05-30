//Retorna true se a imagem for paisagem
const l = 200;
const h = 300;

const ePaisagemC = (l, h) => l > h;

console.log(ePaisagemC(l, h));

function ePaisagemF(l, h) {
  return l > h;
}

console.log(ePaisagemF(l, h));
