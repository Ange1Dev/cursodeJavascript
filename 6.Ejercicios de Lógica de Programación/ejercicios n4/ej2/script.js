const miFuncion = (num = undefined) => {
  if (!num) return console.error("no colocaste ni un numero");
  if (typeof num !== "number") return console.error("El dato no es un numero");
  if (num === 0) return console.error("El dato no puede ser 0");
  if (Math.sign(num) === -1)
    return console.error("El numero no puede ser negativo");



  return ((num % 2)=== 0)
    ? console.info(`El número ${num}, SI es par`)
    : console.info(`El numero ${num}, NO es par`);
};

miFuncion(11)
miFuncion(0)
miFuncion(-1)