// setTimeout(() => {
//     console.log("ejecutando un setTimeout esto se ejecuta un sola vez")
// }, 1000)

// setInterval(() => {
//     console.log("ejecutando un setTimeout esto se ejecuta indifenidamente cada intervalo de cierto tiempo")

// }, 1000)

// setInterval(() => {
//   console.info(new Date().toLocaleTimeString());
// }, 1000);

// let tempor = setTimeout(() => {
//   console.log("ejecutando un setTimeout esto se ejecuta un sola vez");
// }, 1000);

// clearTimeout(tempor);

// clearInterval(tempor);
// // clearInterval

// (() => {
//   console.log("codigo Síncrono");
//   console.log("Inicio");

//   function dos() {
//     console.info("Dos");
//   }

//   function uno() {
//     console.info("Uno");
//     dos();
//     console.info("Tres");
//   }

//   uno();
//   console.log("FIN");
// })();

// codigo Asincrono No Bloqueante

// (()=> {
//     console.log("codigo Asíncrono")
//     console.log("Inicio")

//     function dos() {
//         setTimeout(()=> {
//             console.info("Dos")
//         }, 1000)
//     }
//     function uno() {
//         setTimeout(()=> {
//             console.info("Uno")

//         } ,0)
//         dos()
//         console.info("Tres")
//     }

//     uno()
//     console.log("FIN")
// })();

// CALLBACKS 
// function cuadradoCallback(value, callback) {
//   setTimeout(() => {
//     callback(value * value);
//   }, 0 | (Math.random() * 100));
// }

// cuadradoCallback(0, (value, result) => {
//   console.log("inicia callback");
//   console.log(`Callback: ${value}, ${result}`);
//   cuadradoCallback(1, (value, result) => {
//     console.log("inicia callback");
//     console.log(`Callback: ${value}, ${result}`);
//     cuadradoCallback(2, (value, result) => {
//       console.log("inicia callback");
//       console.log(`Callback: ${value}, ${result}`);
//       cuadradoCallback(3, (value, result) => {
//         console.log("inicia callback");
//         console.log(`Callback: ${value}, ${result}`);
//         cuadradoCallback(4, (value, result) => {
//           console.log("inicia callback");
//           console.log(`Callback: ${value}, ${result}`);
//           cuadradoCallback(5, (value, result) => {
//             console.log("inicia callback");
//             console.log(`Callback: ${value}, ${result}`);
//             cuadradoCallback(6, (value, result) => {
//               console.log("inicia callback");
//               console.log(`Callback: ${value}, ${result}`);
//             });
//           });
//         });
//       });
//     });
//   });
// });

// // PROMISE

// function cuadradoPromise(value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         value,
//         result: value * value,
//       });
//       callback(value, value * value);
//     }, 0 | (Math.random() * 1000));
//   });
// }

// // para trabajar las promesas por parte de funciones, se pueden usar el .then

// // FUNCIONES ASINCRONAS

// async function funcionesAsincronasDeclarada() {
//     try {
//         console.log("Inicio Async function") 
//         let res = await cuadradoPromise(0);
//         console.info(`Async function ${res.value} ${res.result}`)

//         res =  await cuadradoPromise(1)
//         console.info(`Async function ${res.value} ${res.result}`)

//     }
//     catch (err){


//     }

// }

// funcionesAsincronasDeclarada()



// ===Nuevos Tipos y Caracteristicas ===

// Symbols

// let id = Symbol("id")
// let id2 = Symbol("id2")

// console.log(id==id2)
// console.info(typeof id, typeof id2)

// const NAME = symbol();
// const persona = {
// 	[NOMBRE]: "Jon"
// }
// console.log(persona);

// persona.NOMBRE = "Jonathan Mircha"
// console.log(persona)
// console.log(persona.NOMBRE)
// console.log(persona.NOMBRE)


// iterables & iterators

const iterable = [1, 2, 3 ,4, 5];

//Accedemos al iterador del iterable
const iterator = iterable[Symbol.iterator]();

console.log(iterable) //Array(5) [ 1, 2, 3, 4, 5 ]
console.log(iterator) //Array Iterator {  }

//accediendo a los valores del iterator con next manualmente
console.log(iterator.next()) //Object { value: 1, done: false }
console.log(iterator.next()) //Object { value: 2, done: false }
console.log(iterator.next()) //Object { value: 3, done: false }
console.log(iterator.next()) //Object { value: 4, done: false }
console.log(iterator.next()) //Object { value: 5, done: false }


//accedinedo a los valores del iterator con un loop


for (let i = 0; i < array.length; i++) {
  console.log(iterator.next()) //Object { value: 2, done: false }
  
}