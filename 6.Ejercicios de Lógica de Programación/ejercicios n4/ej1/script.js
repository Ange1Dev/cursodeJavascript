const numPrimo = (num = undefined) => {
  if (!num) return console.error("no colocaste ni un numero");
  if (typeof num !== "number") return console.error("El dato no es un numero");
  if (num === 0) return console.error("El dato no puede ser 0");
  if(Math.sign(num)=== -1) return console.error("El numero no puede ser negativo")

  let divisible = false;

  for (let i = 2; i < num; i++) {
    if ((num % i) === 0) {
        divisible = true;
        break;
    }
  }
  return (divisible)
  ? console.info(`El número ${num} NO es número primo`)
  : console.info(`El numero ${num} SI es número primo`)

};

numPrimo(4);
numPrimo(7);
numPrimo(0);
numPrimo([]);
numPrimo(1000)



