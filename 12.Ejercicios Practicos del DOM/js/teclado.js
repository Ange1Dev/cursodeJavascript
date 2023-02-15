const d = document;
let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage);
  const limitsBall = $ball.getBoundingClientRect();
  const limitsStage = $stage.getBoundingClientRect();

  // const move = (direction)=> {
  //     $ball.style.transform = `translate(${x*10}, ${y*10})`
  // }

  switch (e.keyCode) {
    //izq
    case 37:
      // move("left")
      e.preventDefault();
      if (limitsBall.left > limitsStage.left + 10) x--;
      break;
    case 38:
      // move("up")
      e.preventDefault();
      if (limitsBall.top > limitsStage.top + 10) y--;
      break;
    case 39:
      e.preventDefault();
      // move("right")
      if (limitsBall.right < limitsStage.right - 10) x++;
      break;
    case 40:
      // move("down")
      e.preventDefault();
      if (limitsBall.bottom < limitsStage.bottom - 10) y++;
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
  // console.log(e.key)
  // console.log(e.keyCode)
  // console.log(`shift: ${e.shiftKey}`)
  // console.log(`ctrl: ${e.ctrlKey}`)
  // console.log(`alt: ${e.altKey}`)
  if (e.key === "a" && e.altKey) {
    alert("haz lanzado una alerta con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("haz lanzado una confirmacion");
  }
  if (e.key === "p" && e.altKey) {
    prompt("haz lanzado un aviso");
  }
}
