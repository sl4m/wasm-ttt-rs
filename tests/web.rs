extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;

extern crate wasm_ttt_rs;
use wasm_ttt_rs::game::Game;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
#[test]
fn it_runs_through_a_draw_game() {
    let mut game = Game::with_defaults();
    for position in [0, 8, 5, 6, 1].iter() {
        assert!(!game.is_over());
        game.play_round(*position);
    }
    assert!(game.is_over());
    assert_eq!(None, game.winner());
}

#[wasm_bindgen_test]
#[test]
fn it_runs_through_a_win_game() {
    let mut game = Game::with_defaults();
    for position in [0, 8, 1].iter() {
        assert!(!game.is_over());
        game.play_round(*position);
    }
    assert!(game.is_over());
    assert_eq!(Some(String::from("O")), game.winner());
}
