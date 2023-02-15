const $input = document.getElementById("input");
const $button = document.getElementById("button");
const $display = document.querySelector(".display");
const pattern = new RegExp("^[A-Z]\s+$", "i");

$button.addEventListener("click", (e) => {
  e.preventDefault();
  dato = $input.value;
  console.log(pattern.test(dato))
  if (!pattern.test(dato)) {
    if (dato.length === 0) {
      alert("coloque una palabra");
    } else {
      alert("no se valen numeros");
    }
  } else {
    console.log(typeof dato);
    miFuncion(dato);
  }
});

const miFuncion = (dato) => {
  let cantidad = dato.length;
  $display.textContent = cantidad;
};


