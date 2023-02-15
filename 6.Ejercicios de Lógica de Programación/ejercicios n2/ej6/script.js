//* 1° Solucion 
// function buscadorDePalabra(texto = "", palabra= undefined) {
//   if (texto) {
//     if(texto.search(palabra) === -1) {
//         console.info("No se detecto ninguna concidencia")
//     }
//     else {
//       let array = texto.split(" ")
//       let results = array.filter(el  => el == palabra);
//       console.info(`la palabra "${palabra}" se encontro ${results.length} veces en el texto: ${texto}`)
//     }

//   }
// }
// buscadorDePalabra("hola mundo, hola we, Hola", "hola");


//* 2° Solucion



function buscadorDePalabra(texto = "", palabra= undefined) {
  if(!texto) return console.log("No ingresaste el texto largo")
  if(palabra === undefined) return console.error("No ingresaste una palabra para las concidencias")

  let i = 0,
  contador = 0;

  while(i !== -1) {
    i = texto.indexOf(palabra, i)
    if(i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(contador)

}

let textoLargo = `hola hola Hola ,hola hola`
buscadorDePalabra(textoLargo, "hola");
