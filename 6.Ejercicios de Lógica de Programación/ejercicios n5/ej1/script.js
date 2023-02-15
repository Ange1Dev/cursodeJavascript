// ==============CONVERSOR DE BINARIO A DECIMAL Y BISEBERSA==============
//Programar una funcion para convertir numeros de base binaria a decimales y viceversa, ej mi funcion(100,2) devolvera 4 base 10
/*
para pasar un numero en binario a decimal se debe entender que:
1 : 2 a la potencia de x; su valor es valido
0 : 2 a la potencia de x; su valor no es valido
x: la posicion en la que se encuentra el numero
ej:
BINARIO : 1     0        0          1
Calculo : 2^3=8, 2^2=8, 2^1=2 , 2^0 = 1
Decimal : 9
*/

// const conversor = (numero = undefined, base = undefined) => {
//   if (numero === undefined) return console.error("define el numero");
//   if (base === undefined)
//     return console.error(
//       "no colocaste la base numerica,por ejemplo el binario o decimal"
//     );
//   if (typeof numero !== "number")
//     return console.error(`El caracter "${numero}" no es un numero`);
//   if (typeof base !== "number")
//     return console.error(`El caracter "${numero}" no es un numero`);

//   if (base === 2) {
//     let regexp = /^[01]+$/;
//     let numbercadena = numero.toString();
//     let result = regexp.test(numbercadena);

//     if (!result) {
//       return console.error(`La base numerica binaria  solo permite 0 y 1.`);
//     }
//     let resultadoTotal;

//     let array = numbercadena.split("");
//     array.reverse();

//     let objetoNumber = [];

//     for (let i = 0; i < numbercadena.length; i++) {
//       if (array[i] == 0) continue;

//       // console.info(array)
//       let res = 2 ** i;

//       objetoNumber.push(res);

//       resultadoTotal = objetoNumber.reduce((acc, value) => acc + value, 0);
//     }
//     console.info(`valor binario: ${numero} a valorDecimal: ${resultadoTotal}`);
//   }
//   if (base === 10) {
//     //decimal a binario: dividir entre 2 cada decimal y el resto dividirlo por 2 nuevamente, si el resultado es par es "0" y si no es "1"

//     let regexp = /^[0-9]+$/;
//     let objetoNumber = [];
//     let resultadoFin;

//     for (let i = 0; i < 2; i++) {
//       let res = numero / 2;
//       let res2 = res / 2;
//       objetoNumber.push(res2);

//       console.info(objetoNumber);
//     }
//     resultadoFin = objetoNumber.reduce((acc, value) => acc / value, 0);
//   }
// };

const conversor = (numero = undefined, base = undefined) => {
  if (numero === undefined) return console.error("define el numero");
  if (base === undefined)
    return console.error(
      "no colocaste la base numerica,por ejemplo el binario o decimal"
    );

  if (typeof numero !== "number")
    return console.error(`El caracter "${numero}" no es un numero`);
  if (typeof base !== "number")
    return console.error(`El caracter "${numero}" no es un numero`);
  if (typeof base !== "number")
    return console.error(`El valor ${base} ingresando NO es un número `);

  if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, base)} base 2`
    );
  } else if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${numero.toString(2)} base 2`
    );
  } else {
    return console.info(`El ${numero} ingresado no es soportado `);
  }
};

// conversor(1010, 2);
// conversor()
// conversor(2003, 10);

// ============== APLICACION DE DESCUENTO ==============

const aplicarDescuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.error("No ingresaste el monto");
  if (typeof monto !== "number")
    return console.error(`El monto ${monto} no es un numero`);
  if (monto === 0) return console.error("El monto no puede ser '0'");
  if (Math.sign(monto) === -1)
    return console.error("El monto no puede ser negativo");
  if (typeof descuento !== "number")
    return console.error(`El monto ${monto} no es un numero`);
  if (Math.sign(descuento) === -1)
    return console.error("El monto no puede ser negativo");

  return console.info(
    ` ${monto} - ${descuento}% = $${monto - (monto * descuento) / 100} `
  );
};

// aplicarDescuento(1000, 20)
// aplicarDescuento(10000, 20)
// aplicarDescuento(-100, 20)
// aplicarDescuento(0)

// ============== CONTADOR DE AÑOS  ==============

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.error("No ingresaste la fecha");
  if (!fecha instanceof Date)
    return console.error("El valor que ingresaste no es una fecha valida");
  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  let aniosEnMls = 1000 * 60 * 60 * 24 * 365;
  let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMls);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
};

calcularAnios(new Date(1982, 02, 21))