const d = document,
n = navigator;
export default function getGeolocalizacion(id) {
    const $id = d.getElementById(id),
    $loading = d.getElementById("loading"),
    options = {
        enableHighAccuracy: true,
        timeout:5000, 
        maximumAge: 0
    };

    const success = position => {
        $loading.style.display = "none";
        let coords = position.coords;

        $id.innerHTML = `
        <p>Tu posición actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precision: <b>${coords.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>`
    }

    const error = err => {
        $loading.style.display = "none";
        $id.innerHTML = `<p><mark>Error: ${err}: ${err.message} </mark></p>`
        console.error(`Error: ${err}: ${err.message}`)
    }

    $loading.style.display = "block";
    n.geolocation.watchPosition(success, error, options)
}
