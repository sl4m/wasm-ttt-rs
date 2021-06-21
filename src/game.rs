use crate::human::Human;
use core::fmt::Debug;
use std::string::ToString;
use ttt_rs::{Board, Computer, Mark, Player};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Debug)]
pub struct Game {
    board: Board,
    cpu: Box<dyn Player>,
}

#[wasm_bindgen]
impl Game {
    pub fn with_defaults() -> Self {
        let board = Board::new(9);
        let cpu = Box::new(Computer::with_defaults(Self::CPU_MARK));
        Self { board, cpu }
    }

    pub fn play_round(&mut self, position: usize) -> Option<usize> {
        let human: Box<dyn Player> = Box::new(Human::with_move(Self::HUMAN_MARK, position));
        let players: Vec<&Box<dyn Player>> = vec![&human, &self.cpu];

        let mut last_cpu_move: Option<usize> = None;
        for player in players {
            if self.board.is_game_over() {
                break;
            }

            let pos = player.get_move(&self.board);
            self.board.set_mark(pos, player.mark());
            if pos != position {
                last_cpu_move = Some(pos);
            }
        }
        last_cpu_move
    }

    pub fn is_over(&self) -> bool {
        self.board.is_game_over()
    }

    pub fn winner(&self) -> Option<String> {
        self.board.winner().map(ToString::to_string)
    }
}

impl Game {
    const CPU_MARK: Mark = Mark::O;
    const HUMAN_MARK: Mark = Mark::X;
}
