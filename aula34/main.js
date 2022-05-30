//Retorna true se a imagem for paisagem
const l = 200;
const h = 300;

const ePaisagemC = (l, h) => (l > h ? true : false);

console.log(ePaisagemC(l, h));

function ePaisagemF(l, h) {
  if (l > h) return true;
  else return false;
}

console.log(ePaisagemF(l, h));
