//*Funcion declarada
// function miFuncion(input, separador) {
//   let string = input;
//   let cadena = string.split(separador)
//   console.log(cadena)
// }
// miFuncion("hola que tal maestro!", ' ')

//*Funcion expresada
const separarTexto = (input = "", separador = undefined) =>
  !input
    ? console.error("coloca un texto a separar")
    : separador == undefined
    ? console.error("coloque un caracter separador")
    : console.info(input.split(separador));

separarTexto("hola que tal", " ");
separarTexto();
