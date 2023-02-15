/**
 * 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/



// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const quitarDuplicados = (array = undefined)=> {
    if(array === undefined) return console.error("No ingresaste un arreglo de un número");
    if(!(array instanceof Array)) return console.error("El valor ingresado no es u arreglo")
    if(array.length === 0) return console.error("El arreglo esta vacio");

    if(array.length === 1) return console.error("El arreglo debe tener al menos 2 elementos")
    arraycop = array.filter((value, index, self)=> self.indexOf(value)=== index)
    console.warn(arraycop)


    /*con el metodo filter*/

    // return console.info({
    //     original: array,
    //     sinDuplicados: array.filter((value, index, self )=> self.indexOf(value) === index)
    // })

    return console.info({
        original: array,
        sinDuplicados: [...new Set(array)]
    })
    //el objeto sinDuplicados, basicamente, tiene 3 parametros,(valor(valor del elemento ej 2), posicion(1) self  (array),. despues manda una condicion que dice si el valor es igual al)

}

// quitarDuplicados([2,2,2,2,2,2,2, 9, 2])
// quitarDuplicados([2,2,2,2,2,2,2, 9, 2])
// quitarDuplicados([2])


// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const sacarMedia = (array = undefined)=> {
    if(array === undefined) return console.error("No ingresaste un arreglo de un número");
    if(!(array instanceof Array)) return console.error("El valor ingresado no es u arreglo")
    if(array.length === 0) return console.error("El arreglo esta vacio");

    if(array.length === 1) return console.error("El arreglo debe tener al menos 2 elementos")

    for(let num of array) {
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado, No es un número`)
    }
    //1° Solucion
    // let promedio = array.reduce((acc , value) => acc +value , 0)

    // promedio = promedio / array.length
    // return console.info({
    //     promedio: (promedio)


// })
    return console.info(
        array.reduce((total , num, index, array) => {
            total += num;
            if(index === array.length - 1) {
                return `EL promedio de ${array.join(" + ")} es ${total / array.length}`
            } else {
                return total;
            }
        })
    )
    
}

sacarMedia([9,8,7,6,5,4,3,2,1,0])
sacarMedia([9,8,7,6,5,4,3,2,1, true])