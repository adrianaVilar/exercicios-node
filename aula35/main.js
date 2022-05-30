function numero(num) {
  const divisivelPorTres = (num) => (num % 3 === 0 ? "Fizz" : "");
  const divisivelPorCinco = (num) => (num % 5 === 0 ? "Buzz" : "");

  if (divisivelPorTres(num) === "" && divisivelPorCinco(num) === "") return num;

  if (isNaN(num)) return num;

  return divisivelPorTres(num) + divisivelPorCinco(num);
}

console.log(numero(21), "deve retornar Fizz");
console.log(numero(10), "deve retornar Buzz");
console.log(numero(15), "deve retornar FizzBuzz");
console.log(numero(7), "deve retornar 7");
console.log(numero("qwe"), "deve retornar qwe");
