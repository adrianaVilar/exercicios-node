function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const hora = retornaHora(15);
  console.log(hora);
} catch (err) {
  console.log("Date não foi instanciado.");
} finally {
  console.log("Tenha um bom dia.");
}
