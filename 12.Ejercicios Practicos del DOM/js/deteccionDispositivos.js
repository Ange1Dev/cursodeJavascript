const d = document,
  n = navigator,
  ua = n.userAgent,
  w = window;
export default function userDevice(id) {
  const $id = d.getElementById(id);
  const isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipad|ipod/i),
    windows: () => ua.match(/windows phone/i),
    any: function () {
      return this.android() || this.ios() || this.windows();
    },
  };
  const isDekstop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows();
    },
  };
  const isBrowser = {
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera|opera mini/i),
    ie: () => ua.match(/msie|iemobile/i),
    edge: () => ua.match(/edge/i),
    any: function () {
      return (
        this.chrome() ||
        this.safari() ||
        this.firefox() ||
        this.opera() ||
        this.ie() ||
        this.edge()
      );
    },
  };
  // console.log(ua)

  $id.innerHTML = `
  <ul>
    <li>User Agent <b>${ua}</b></li>
    <li>Plataforma <b>${
      isMobile.any() ? isMobile.any() : isDekstop.any()
    }</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>

  </ul>
  `;
  if(isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve en chrome</mark></p>`
  }
  if(isBrowser.firefox()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve en firefox</mark></p>`
  }
  if(isDekstop.linux()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para linux</mark></p>`
  }
  if(isDekstop.mac()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para mac</mark></p>`
  }
  if(isDekstop.windows()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para windows</mark></p>`
  }
//   Redireccion
  if(isMobile.any()) {
    w.location.href = "https://www.google.com"
  }
}
