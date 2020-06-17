use ttt_rs::board::Board;
use ttt_rs::mark::Mark;
use ttt_rs::player::Player;

#[derive(Debug)]
pub(crate) struct Human {
    mark: Mark,
    position: usize,
}

impl Human {
    pub fn with_move(mark: Mark, position: usize) -> Self {
        Self { mark, position }
    }
}

impl Player for Human {
    fn get_move(&self, _board: &Board) -> usize {
        self.position
    }

    fn mark(&self) -> Mark {
        self.mark
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_acts_like_a_human_player() {
        let human = Human::with_move(Mark::X, 8);
        assert_eq!(8, human.get_move(&Board::new(9)));
    }
}
