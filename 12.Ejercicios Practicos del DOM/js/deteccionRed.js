const d = document,
  w = window,
  n = navigator;

export default function networkStatus() {
  function isOnline() {
    const $div = d.createElement("div");
    if (n.onLine && n.offLine !== undefined) {
      $div.textContent = `Conexion Restablecida`;
      $div.classList.add("online");
      $div.classList.remove("offline");
    } 
    if(n.offLine) {
      $div.textContent = `Sin Conexion`;
      $div.classList.add("offline");
      $div.classList.remove("online");
    }

    d.body.insertAdjacentElement("afterbegin", $div);

    setTimeout(() => {
      d.body.removeChild($div);
    }, 5000);
  }

  w.addEventListener("online", isOnline());
  w.addEventListener("offline", isOnline());
}
