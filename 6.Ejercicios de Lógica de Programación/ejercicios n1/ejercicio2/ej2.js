//* funcion declarada
// function miFuncion(input, max) {
//   if (typeof input == "string") {
//     let recortar = input.slice(0, max);
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
// miFuncion(2, 10);
// miFuncion(array, 10);

//* funcion expresada

const recortarFuncion = (input = "", max = undefined) =>
  !input
    ? console.error("Ingrese un string")
    : (max === undefined)
    ? console.error("No ingresaste la longitud para recortar el texto")
    : console.info(
        `La cadena: "${input.slice(0, max)}" tiene ${
          input.length
        }/10 caracteres permitidos`
      );

recortarFuncion("hola " ,10);
recortarFuncion("", 9 )
