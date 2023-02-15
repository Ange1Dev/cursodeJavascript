const capicua = (num = 0) => {
  if (!num) return console.error("No ingresaste el numero");
  if (typeof num !== "number")
    return console.info(`El valor ${num} ingresado, No es un número`);

  num = num.toString();
  let alReves = num.split("").reverse().join("");

  return num === alReves
    ? console.info(
        `Si es capicua, Numero original: ${num}, Número al revés: ${alReves}`
      )
    : console.info(
        `No es capicua, Numero original: ${num}, Número al ${alReves}`
      );
};

capicua(35);
capicua(3);
capicua(101);
capicua([]);
capicua({});

