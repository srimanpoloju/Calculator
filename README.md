# Simple JS Calculator

A small, single-file JavaScript calculator with theme support and a playful "Creative Time" mode.

This project is intended as a compact demo and learning exercise. It shows how to build a UI-driven calculator using plain HTML, CSS (variables for theming), and vanilla JavaScript. It includes persistent theme selection and a creative animated mode for fun.

## Features

- Basic calculator operations: addition (+), subtraction (-), multiplication (*), division (/)
- Clear (`C`) and evaluate (`=`)
- Theme selection with persistence (Dark, Light, Neon)
- "Creative Time" — a visual animated mode that temporarily shows a playful message and applies an animated background and playful button styling
- Safer evaluation: calculation uses a try/catch around `eval` to avoid uncaught exceptions and display `Error` for invalid expressions

## Files

- `index.html` — main HTML file with the calculator markup and controls
- `style.css` — styling using CSS variables and theme classes (`.theme-light`, `.theme-neon`), plus `.creative` animation styles
- `script.js` — client-side logic: button handling, theme persistence (localStorage), creative mode toggle, and evaluation logic

## How to run

You can open `index.html` directly in your browser. For a nicer local experience (and to avoid file:// quirks), run a simple static server from the project directory.

## Usage

1. Select a theme from the dropdown — the selected theme is saved and will persist across reloads.
2. Click number/operator buttons to compose an expression.
3. Click `=` to evaluate or `C` to clear.
4. Click `Creative Time` to enter the animated mode. Clicking again exits and restores the previous display content.

## Notes and small implementation details

- The calculator uses `eval()` to evaluate expressions. While this is acceptable for a local demo, avoid evaluating untrusted input in production. Consider using a dedicated math parser (for example, `math.js`) if you plan to extend this into a public-facing app.
- Theme persistence is implemented with `localStorage` under the key `calc-theme`.
- Creative mode is visual only: it toggles a `.creative` class on the `body` and temporarily replaces the display text with a small emoji message while preserving the previous expression.

## Next steps (optional improvements)

- Replace `eval` with a math expression parser for safety and extended features (parentheses, functions, constants).
- Add keyboard input support and improved focus handling.
- Add unit tests for the evaluator and UI behavior using a headless browser test runner.
- Add accessibility improvements: ARIA labels, proper focus order, and keyboard-only usage.

## License

This project is provided as-is for learning and demo purposes. Use and modify as you like.

---
If you'd like, I can add keyboard support or replace `eval` with a safer parser now — tell me which you'd prefer next.
