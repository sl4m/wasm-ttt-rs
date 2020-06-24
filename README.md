# wasm-ttt-rs

![Build](https://github.com/sl4m/wasm-ttt-rs/workflows/Build/badge.svg?branch=dev)

Tic Tac Toe (or noughts and crosses) in Rust + WASM.

## Dependencies

* wasm-pack
* Rust toolchain

## Run locally

    $ wasm-pack build
    $ cd www
    $ npm install
    $ npm run start

## Run tests locally

    $ wasm-pack test --headless --chrome
