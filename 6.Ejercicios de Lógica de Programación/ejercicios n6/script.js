/**
   18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
 */

const vocalesCadena = (texto = undefined) => {
  if (!texto) console.error("Coloque un dato");
  if (typeof texto === "string") console.error("Solo se permiten string");

  let vocales = 0,
    consonantes = 0;

  texto = texto.toLocaleLowerCase();

  for (letra of texto) {
    console.info(letra);

    if (/[AEIOUÁÉÍÓÚaeiouáéíóú]/.test(letra)) vocales++;

    if (/[bcdfghjklñptswqzxcvbmn]/.test(letra)) consonantes++;
  }

  return console.info({
    texto,
    vocales,
    consonantes,
  });
};
// vocalesCadena("BUENOS DIAS");

/**
   19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/

const validrNombre = (name = undefined) => {
  if (!name) return console.error("Coloque un dato");
  if (typeof name !== "string") return console.error("Solo se permiten string");

  let expReg = /^[A-Za-zñÑ\s]+$/g.test(name);

  return expReg
    ? console.info(`"${name}, es un nombre valido"`)
    : console.error(`"${name}, NO un nombre valido"`);
};

// validrNombre("Jonathan Mircha")
// validrNombre("Jonathan 21212")

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validrEmail = (email = undefined) => {
  if (!email) return console.error("Coloque un dato");
  if (typeof email !== "string")
    return console.error("Solo se permiten string");

  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );

  return expReg
    ? console.info(`"${email}, es un email correcto`)
    : console.error(`"${email}, NO un email correcto)`);
};

// validrEmail("2");
// validrEmail("holamundo@gmail.com");
// validrEmail("holamundo@gmails");

/** Fusion 19 y 20  */

const validarPatron = (cadena = "", patron = "") => {
  if (!cadena) return console.error("Coloque una cadena valida");
  if (!patron) return console.error("Coloque una cadena valida");

  if (typeof cadena !== "string")
    return console.error("Solo se permiten string");
  if (!(patron instanceof RegExp))
    return console.error(`el valor ${patron} no es una expresion regular`);

  let expReg = patron.test(cadena);

  return (expReg)
    ? console.info(`"${cadena}, cumple con el patro ingresado`)
    : console.error(`"${cadena}, NO cumple con el patron ingresado`);
};
validarPatron(
  "Holaaa@gmail.com",
  /[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})/i
);

validarPatron("",
  /[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})/i
);

