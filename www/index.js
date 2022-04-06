import { Game } from "wasm-ttt-rs";

const DRAW_MESSAGE = "The game is a draw.";
const WIN_MESSAGE = "The winner is ";
const HUMAN_MARK = "X";
const CPU_MARK = "O";
const DISABLE_CLICK = " disable-click";
const game = Game.with_defaults();
const board = document.getElementById("board");
const cells = document.getElementsByClassName("cell");
const endGame = document.getElementById("end-game");

Array.from(cells).forEach(cell => {
  cell.addEventListener("click", e => {
    const el = e.currentTarget;
    el.className += DISABLE_CLICK;
    el.innerText = HUMAN_MARK;
    const cpuMove = game.play_round(+el.dataset.pos);

    if (cpuMove != undefined) {
      const cpuEl = document.querySelector('[data-pos="' + cpuMove + '"]');
      disableEl(cpuEl);
      cpuEl.innerText = CPU_MARK;
    }

    if (game.is_over()) {
      disableEl(board);
      const winner = game.winner();
      const msgEl = document.getElementById("message");

      if (winner) {
        msgEl.innerText = WIN_MESSAGE + winner + ".";
      } else {
        msgEl.innerText = DRAW_MESSAGE;
      }
      endGame.style.visibility = "visible";
    }
  });
});

function disableEl(el) {
  el.className += DISABLE_CLICK;
}
