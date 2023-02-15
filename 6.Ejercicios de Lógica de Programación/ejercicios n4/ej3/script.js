const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (typeof grados !== "number") return console.error(`El valor "${grados}", no es un número`)
  if (grados === undefined) return console.error("No pasaste la unidad a convertir");
  if (unidad === undefined) return console.error("La unidad no esta definida")
  if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.info("La unidad no es permitida")
  if (typeof unidad !== "string") return console.error(`El valor "${unidad}", no es una cadena de texto`);

  let res = (grados * 9) / 5 + 32;

  if(unidad === "C") return console.info(`${grados}°C = ${((grados * 9) / 5 + 32).toFixed(2)} °F`)
  else if(unidad === "F") return console.info(`${grados}°F = ${((grados - 32) * 5/9).toFixed(2)} C°`)


};


convertirGrados(2);
convertirGrados("2");
convertirGrados(11, "C" );
convertirGrados(32, "F" );

