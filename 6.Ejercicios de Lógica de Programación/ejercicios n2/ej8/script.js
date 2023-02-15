const eliminarCaracter = (texto ="", patron ="")=> {

    (!texto) ? console.error("No agregaste un texto") : console.info(texto.replace(new RegExp(patron, "ig"), ""))

}
eliminarCaracter("hola mundo" , "u")
eliminarCaracter("hola mundo" , "u")
eliminarCaracter("xyz1 xyz2 xyz3 xyz4" , "xyz")