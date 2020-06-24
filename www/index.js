import { Game } from "wasm-ttt-rs";

const DRAW_MESSAGE = "The game is a draw";
const WIN_MESSAGE = "The winner is ";
const HUMAN_MARK = "X";
const CPU_MARK = "O";
const DISABLE_CLICK = " disable-click";
const game = Game.with_defaults();
const cells = document.getElementsByClassName("cell");

Array.from(cells).forEach(cell => {
  cell.addEventListener("click", e => {
    const el = e.toElement;
    el.className += DISABLE_CLICK;
    el.innerText = HUMAN_MARK;
    const cpuMove = game.play_round(+el.dataset.pos);

    if (cpuMove) {
      const cpuEl = document.querySelector('[data-pos="' + cpuMove + '"]');
      cpuEl.className += DISABLE_CLICK;
      cpuEl.innerText = CPU_MARK;
    }

    if (game.is_over()) {
      const winner = game.winner();
      const msgEl = document.getElementById("message");

      if (winner) {
        msgEl.innerText = WIN_MESSAGE + winner;
      } else {
        msgEl.innerText = DRAW_MESSAGE;
      }
    }
  });
});
