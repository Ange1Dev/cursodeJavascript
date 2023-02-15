const d = document;

export default function draw(btn, selector) {
  const getWinner = (selectori) => {
    const $players = d.querySelectorAll(selectori);
    const random = Math.floor(Math.random() * $players.length);
    const winner = $players[random];
    return `El ganador es: ${winner.textContent}`;
  };
  const getWinnerComment = (selectori) => {
    const $players = document.querySelectorAll(selectori);
    console.info($players)
    const random = Math.floor(Math.random() * $players.length);
    const winner = $players[random];
    return console.log(`El ganador es: ${winner.textContent}`);
  };
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}
