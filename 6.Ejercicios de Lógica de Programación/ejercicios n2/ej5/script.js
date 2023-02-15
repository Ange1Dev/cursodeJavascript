function revertirTexto(texto = "") {
  if (!texto) {
    console.error("ingrese un texto");
  }
  if (texto) {
    let array = texto.split("");
    let arrayReverse = array.reverse();
    let textReverse = arrayReverse.join("");
    console.log(`${textReverse}`);
  }
}
revertirTexto();
revertirTexto("hola mundo");
revertirTexto("hola que tal man");


