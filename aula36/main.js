function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y devem ser números.");
  }

  return x + y;
}

try {
  console.log(soma(1, 2), "deve ser 3");
  console.log(soma("1", 2), "deve retornar o erro");
  console.log(soma(1, "2"), "deve retornar o erro");
} catch (err) {
  console.log(err);
  console.log("x ou y digitados não são número.");
}
