//*con funcion declarada
// function miFuncion(input = "") {
//   if(!input) {
//     console.error("No ingresaste ningun caracter")
//   }
//   else {
//     console.info(`La cadena "${input}" tiene ${input.length} caracteres`)
//   }

// }

// let array = [1, 2, 3];

// miFuncion("sda");
// miFuncion();
// miFuncion("hola mundo");
// miFuncion("asdadasd");
// miFuncion("rancio");
//*funcion expresada

const miFuncion = (input = "") =>
  !input
    ? console.error("No ingresaste ningun caracter")
    : console.info(`La cadena "${input}" tiene ${input.length} caracteres`);
miFuncion("sad");
miFuncion();
