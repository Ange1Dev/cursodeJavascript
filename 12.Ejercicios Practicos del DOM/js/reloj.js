const d = document;

export function clock(clock, btnPlay, btnStop) {
  let setIntervalTime;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      console.log("play");

      setIntervalTime = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3> ${clockHour} </h3>`;
      }, 1000);

      e.target.disabled = true;
      d.querySelector(btnStop).disabled = false;
    }
    if (e.target.matches(btnStop)) {
      console.log("stopping");
      clearInterval(setIntervalTime);

      e.target.disabled = true;
      d.querySelector(clock).innerHTML = ``;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarm(sound,btnPlay, btnStop ) {
    let alarmaTempo;
    const $alarm = d.createElement("audio")
    $alarm.src = sound
    d.addEventListener("click", (e) => {
        if(e.target.matches(btnPlay)) {
            console.log("alarm play")
            alarmaTempo = setTimeout(()=> {
                $alarm.play()
            },2000)
            e.target.disabled = true
            d.querySelector(btnStop).disabled = false;
        }
        if(e.target.matches(btnStop)) {
            console.log("alarm stop")
            $alarm.pause();
            $alarm.currentTime = 0;
            clearTimeout(alarmaTempo)

            e.target.disabled = true
            d.querySelector(btnPlay).disabled = false;

        }
    });
}
