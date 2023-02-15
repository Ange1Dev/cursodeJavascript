import btnScroll from "./btnScroll.js";
import burgerMenu from "./burgerMenu.js";
import carrusel from "./carrusel.js";
import countDown from "./countdown.js";
import userDevice from "./deteccionDispositivos.js";
import networkStatus from "./deteccionRed.js";
import webCam from "./deteccionWebcam.js";
import searchFilter from "./filtroBusquedas.js";
import getGeolocalizacion from "./geolocalizacion.js";
import speechReader from "./narradorLenguas.js";
import responsiveMedia from "./objetoResponsive.js";
import responsiveTester from "./pruebaResponsive.js";
import { clock, alarm } from "./reloj.js";
import scrollSpy from "./scrollSpy.js";
import draw from "./sorteo.js";
import { shortcuts, moveBall } from "./teclado.js";
import darkTheme from "./temaDark.js";
import contactFormValidations from "./validacionesForm.js";
import smartVideo from "./videoInteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  burgerMenu(".menu-close", ".nav__menu", ".nav__list li a");
  clock("#reloj", "#active-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#active-alarma", "#desactivar-alarma");
  countDown("countdown", "May 23 2024 03:23:19", "Feliz cumpleaño,");
  btnScroll(".scroll-top-btn");
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/wHnJ2MfKS3U2ChtZ7" target="_blank">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79041.58768512541!2d-1.24758785!3d51.7504163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48713380adc41faf%3A0xc820dba8cb547402!2sOxford%2C%20Reino%20Unido!5e0!3m2!1ses!2sar!4v1676104687362!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveMedia(
    "image",
    "(min-width: 1024px)",
    `<a href="http://127.0.0.1:5500/assets/fondo1.png" target="_blank">Ver imagen</a>`,
    `<img class="img" src="./assets/fondo1.png" alt="">`
  );
  responsiveTester("responsive-tester");
  userDevice("user-device");
  webCam("webcam")
  getGeolocalizacion('geolocation');
  searchFilter(".card-filter", ".card")
  draw("#winner-btn", ".player" )
  carrusel("active")
  scrollSpy("")
  smartVideo()
  contactFormValidations()

});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();

speechReader()
