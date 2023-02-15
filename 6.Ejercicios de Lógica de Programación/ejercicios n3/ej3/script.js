const factorial = (numero = undefined) => {
  if (numero === undefined) return console.error("numero is undefined");
  if (typeof numero !== "number") return console.error("No es un numero");
  if (numero === 0) return console.error("El numero no puede ser 0");
  if (Math.sign(numero) === -1) return console.error("El numero no puede ser negativo");

    let factorial = 1;
    for(let i = numero; i > 1; i--){
      factorial *= i
    }
    return console.info(`El factorial de ${numero} es ${factorial}`)
};

factorial()
factorial(21)
factorial(5)
factorial([])
factorial(-10)
factorial(200)