const hora = new Date().getHours();

if (hora >= 0 && hora <= 12) {
  console.log("Bom dia!");
} else if (hora >= 13 && hora <= 18) {
  console.log("Boa tarde!");
} else if (hora >= 19 && hora <= 23) {
  console.log("Boa noite!");
} else {
  console.log("Não consegui identificar a hora, mas desejo um bom dia!");
}
