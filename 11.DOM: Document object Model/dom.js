/**** Curso de DOM javascript */

console.log("***********Elementos del Documento***********");
// console.log(document)
// console.log(document.head)
// console.log(document.body)
// console.log(document.documentElement)
// console.log(document.doctype)
// console.log(document.title)
// console.log(document.charset)
// console.log(document.links)
// console.log(document.images)
// console.log(document.forms)
// console.log(document.styleSheets)
// console.log(document.scripts)

// setTimeout(()=> {
//     console.log(document.getSelection().toString())

// }, 2000)

// const d = document;

/******MANEJO DEL DOM */
// const d = document
// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));
// console.log(document.getElementById("menu"));
// console.log(document.querySelector("#menu"));
// console.log(document.querySelector("a"));
// console.log(document.querySelectorAll("a"));
// console.log(document.querySelectorAll("a").length);
// document.querySelectorAll("a").forEach((el) => console.log(el));
// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card")[2]);
// console.log(document.querySelector("#menu li"));
// console.log(document.querySelectorAll("#menu li"));

/***SCSSOM */
/*
const $linkDOM = d.querySelector(".link-dom");

console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style"))
console.log(getComputedStyle($linkDOM).getPropertyValue("color"))
console.info($linkDOM)


$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.color = "red";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
$linkDOM.style.fontFamily = "sen";


//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;
$body.style.fontFamily = "sen"
$body.style.textAlign = "center";


$html.style.setProperty("--dark-color", "#100");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);


/*Clases CSS*/

// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
// $card.classList.add("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// console.log($card.className);
// console.log($card.classList);
// $card.classList.remove("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45");
// $card.classList.replace("rotate-45", "rotate-135");
// $card.classList.add("opacity-80", "sepia");
// $card.classList.remove("opacity-80", "sepia");
// $card.classList.toggle("opacity-80", "sepia");

//#  Tema: clasen 67° “DOM Traversing: Recorriendo el DOM

// const $cards = document.querySelector(".cards")

// console.log($cards)
// //obtener elemento hijos
// console.log($cards.children)
// console.log($cards.children(2))
// console.log($cards.firstElementChild)//obtener primer elemento hijo
// console.log($cards.lastElementChild)//obtener ultimo elemento hijo

// //obtener elemento padre
// console.log($cards.parentElement)

// //obtener elementos hermanos
// console.log($cards.previousElementSibling)
// console.log($cards.nextElementSibling)

// //obtener el ancestro mas cercanod
// console.log($cards.children(3).closest("section"))

/*
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals")
$img.setAttribute("alt", "Animals")

$figure.classList.add("card")
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img)
$figure.appendChild($figcaption)
$cards.appendChild($figure)

$figure2.innerHTML = `
  <img src="https://placeimg.com/200/200/people" alt="People">
  <figcaption>People</figcaption>
`;

$figure2.classList.add("card")
$cards.appendChild($figure2)

//pasar una array a una etiqueta 
const estaciones = ["Primavera", "Verano" , "Otoño", "invierno"]
const $ul = document.createElement("ul")

document.write("<h3>Estaciones del año</h3>")

document.body.appendChild($ul)
estaciones.forEach(el => {
  const $li = document.createElement("li")
  $li.textContent = el;
  $ul.appendChild($li);
})


//pasar la array continentes

const continentes = ["africa", "america", "asia" ,"europa", "oceania"],
$ul2 = document.createElement("ul")

$ul2.innerHTML = "";
document.write("<h3>Continentes del mundo</h3>")
document.body.appendChild($ul2)
continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`)

//insercion de datos con fragmentos(mejora el rendimiento)
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach((el) => {
const $li = document.createElement("li");
$li.textContent = el;
$fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);*/

// const $cards = document.querySelector(".cards"),
//   $template = document.querySelector("#template-card").content,
//   $fragment = document.createDocumentFragment(),
//   cardContent = [
//     {
//       title: "Tecnologias",
//       img: "https://placeimg.com/200/200/tech",
//     },
//     {
//       title: "Animales",
//       img: "https://placeimg.com/200/200/animals",
//     },
//     {
//       title: "Arquitectura",
//       img: "https://placeimg.com/200/200/arch",
//     },
//     {
//       title: "Gente",
//       img: "https://placeimg.com/200/200/people",
//     },
//     {
//       title: "Naturaleza",
//       img: "https://placeimg.com/200/200/natur",
//     },
//   ];

//   cardContent.forEach(el => {
//     $template.querySelector("img").setAttribute("src", el.img);
//     $template.querySelector("img").setAttribute("alt" , el.title)
//     $template.querySelector("figcaption").innerHTML = el.title;
// 		let $clone = document.importNode($template, true)
// 		$fragment.appendChild($clone);
//   })
//   $cards.appendChild($fragment)

// 70
/*
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure")

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="any">
  <figcaption>Any</figcaption>
`
$newCard.classList.add("card")

$cards.replaceChild($newCard, $cards.children[2])

//colocar elemento como primer hijo
$cards.prepend($newCard);
//colocar como ultimo hijo
$cards.append($newCard);
//colocar como hermano anterior
$cards.before($newCard);
//colocar como hermano posterior
$cards.after($newCard);
*/

//EVENTO SEMANTICO
const $btn = document.querySelector("#btn")

function funcionSaludar(event){
	alert("hola")
	console.log(event)
}
//en esto hay problema, esto solo se puede agreagar una sola funcion
$btn.onclick = funcionSaludar;
$btn.onclick = function(e){
	alert("adios")
  console.info(e)
  console.info(event)

}
//EVENTO MULTIPLE
const $btn2 = document.querySelector("#btn2")

$btn2.addEventListener("click", (e)=> {
  console.log(e)
  console.log(e.type)
  console.log(e.target)
  
})
//remember si colocas las parentesis en la funcciones se va ejecutar por defecto.

// const $eventoRemover = document.getElementById("btn3")

// const removerDobleClick = (e) => {
//   alert(`Removiendo el vento de tipo ${e.type}`);
//   console.log(e)
//   $eventoRemover.removeEventListener("dblclick", removerDobleClick)
// }

// $eventoRemover.addEventListener("dblclick", removerDobleClick)

// //74. FLUJO DE EVENTOS

// const $divsEventos = document.querySelectorAll(".eventos-flujo div")

// console.log($divsEventos)

// function flujoEventos(e) {
//   // e.stopPropagation()
//   console.log(`saludo desde ${this.className}, el click lo origino ${e.target.className}`)
// }

// $divsEventos.forEach((div)=> {
//   //Fase de burbuja
//   div.addEventListener("click", flujoEventos)
//   //Fase de captura - menos usados
//   div.addEventListener("click", flujoEventos, true)
//   //config event

//   div.addEventListener("click", flujoEventos , {
//     capture: false,
//     once: true
//   })


// })

// 76. Delegacion de eventos

/*
function flujoEventos(e) {
  e.stopPropagation()
}

document.addEventListener("click" , (e)=> {
  console.log(`Click en`, e.target)

  if(e.target.matches(".eventos-flujo div")) {
    flujoEventos(e)
  }
  if(e.target.matches(".eventos-flujo a")){
    alert("Hola soy tu amigo y docente digital... jonathan mircha")
    e.preventDefault()
  }

})
console.log(alert("hola"))

document.addEventListener("DOMContentLoaded" , (e)=> {
	console.log("*** Evento DOMContentLoaded ***")
	console.log(window.screenX)
	console.log(window.screenY)
	console.log(e)
} )

*/

const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana")


  let ventana;
$btnAbrir.addEventListener("click" ,(e)=>{
  ventana = open("http://jonmircha.com")
})
$btnCerrar.addEventListener("click" ,(e)=>{
  ventana.close()
})
$btnImprimir.addEventListener("click" ,(e)=>{
  print()
})