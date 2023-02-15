//Objeto XMLHttpRequest
(() => {
  const xhr = new XMLHttpRequest();
  const $xhr = document.getElementById("xhr");
  const $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    //logica para el https reqest y manejo de los eventos
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      //   console.log("exito");
      //   console.log(xhr.responseText);
      let json = JSON.parse(xhr.responseText);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      //   console.log("error");
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status} ${message}`;
    }

    // console.log(xhr)
  });

  //obtener datos de una api publica
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  // de una manera local
  xhr.open("GET", "./assets/users.json");

  //enviar datos con el .send
  xhr.send();
})();

//API  Fetch
(() => {
  const $fetch = document.getElementById("fetch");
  const $fragment = document.createDocumentFragment();

  //   fetch("assets/users.json")
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      //   console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      //   console.error("Estamos en el catch", err);
      let message = err.statusText || "ocurrio un error";
      $fetch.innerHTML = `Error ${err.status} ${message}`;
    })
    .finally(() => {
      //   console.info("Esto se ejecuta sin importar");
    });
})();

//API FETCH + ASYNC -AWAIT
(() => {
  const $fetchAsync = document.getElementById("fetch-async");
  const $fragment = document.createDocumentFragment();

  //   fetch("assets/users.json")
  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let json = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);

      //   if(!res.ok) throw new Error("Ocurrio un Errro al solicitar los Datos")
    } catch (err) {
      let message = err.statusText || "ocurrio un error";
      $fetchAsync.innerHTML = `Error ${err.status} ${message}`;
    } finally {
      //   console.info("Se ejecuta independientemente de try y catch");
    }
  }
  getData();
})();
//AXIOS
(() => {
  const $axios = document.getElementById("axios");
  const $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      let json = res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      //   console.error(err.response);
      let message = err.response.statusText || "ocurrio un error";
      $axios.innerHTML = `Error ${err.response.status} ${message}`;
    })
    .finally(() => {
      //   console.info("se ejecuta siempre");
    });
})();

//AXIOS + ASYNC - AWAIT
(() => {
  const $axiosAsync = document.getElementById("axios-async");
  const $fragment = document.createDocumentFragment();

  

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      let json = await res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);

    } catch (err) {
        let message = err.response.statusText || "ocurrio un error";
        $axiosAsync.innerHTML = `Error ${err.response.status} ${message}`;
    } finally {
      // console.log("se ejecuta siempre");
    }
  }
  getData();
})();
