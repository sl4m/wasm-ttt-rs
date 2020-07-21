#![forbid(unsafe_code)]
#![warn(missing_debug_implementations, rust_2018_idioms)]
#![deny(clippy::all, clippy::pedantic, clippy::restriction)]
#![allow(
    clippy::implicit_return,
    clippy::missing_docs_in_private_items,
    clippy::multiple_inherent_impl,
    clippy::missing_inline_in_public_items,
    clippy::must_use_candidate,
    clippy::panic
)]

pub mod game;
mod human;
mod utils;
