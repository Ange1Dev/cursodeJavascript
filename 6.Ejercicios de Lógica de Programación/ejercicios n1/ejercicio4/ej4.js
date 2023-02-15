//* funcion declarada
function miFuncion(input = " ", repetir) {
  if (typeof input == "string") {
    let string = input;
    let cadena = string.repeat(repetir);
    console.log(cadena);
  }
}

miFuncion("hola mundo ", 10);

//* funcion expresada

const repetirText = (input = "", repetir = undefined) => {
  if (!input) return console.error("No ingresaste un texto");
  if (repetir === undefined)
    return console.error("No ingresaste un numero de veces a repetir");
  if (repetir === 0) return console.error("El numero de veces no puede ser 0");
  if (Math.sign(repetir) === -1)
    return console.error("El numero no puede ser negativo");

  for(i = 0; i <= repetir; i++) console.info(`${input} ${i}`)
  
};

repetirText("HOLA MUNDO", 100)
repetirText("HOLA MUNDO", 0)
repetirText("HOLA MUNDO", -10)
repetirText("", -10)




// function miFuncion(input, max) {
//   if (typeof input == "string") {
//     let caracteres = input;
//     let recortar = caracteres.slice(0, max);
//     console.log(recortar);
//   } else {
//     console.log(
//       typeof input == "number"
//         ? "fijate que no aceptamos otros tipos de datos solo 'strings'"
//         : "no aceptamos otros datos"
//     );
//   }
// }

// let array = [1, 2, 3];
// miFuncion("hola mundo", 10);
