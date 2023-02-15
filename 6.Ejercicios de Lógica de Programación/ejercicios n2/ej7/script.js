function miFuncion(input = "") {
    if (!input) {
        return console.error("ingrese un texto");
      }
    let palabrat = input.toLocaleLowerCase();
    let array = palabrat.split("")
    let arrayRev = array.reverse();

    let value = arrayRev.join("")
    console.log(value)
    let value2 = input;
    console.log(value2)

    if(value === value2) {
      console.info(`Si la palabra "${value2}" es lo mismo que ${value}`)
    }
    else {
      console.info(`La palabra "${value2}" no es lo mismo que al reves que es "${value}"`)
    }
}
miFuncion("hola")