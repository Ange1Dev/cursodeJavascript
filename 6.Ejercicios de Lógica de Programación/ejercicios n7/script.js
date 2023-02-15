const elevarArray = (array = undefined)=> {

    if(!array) return console.error("Coloque elementos a la array")
    let arraAlCuadrado = []
    for(let num of array) {
        num = num ** 2;
        console.info(num)
        arraAlCuadrado.push(num)

    }
    console.info({
        array,
        arraAlCuadrado

    }
    )

}

elevarArray([1, 2, 4])