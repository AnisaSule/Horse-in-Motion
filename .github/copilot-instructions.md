# AI Agent Instructions for Horse-in-Motion

This project is an interactive animation experiment using p5.js to create motion effects with a horse animation GIF. Here's what you need to know to work effectively with this codebase:

## Project Structure

- `index.html`: Entry point that sets up p5.js and loads the sketch
- `sketch.js`: Main p5.js sketch file containing animation logic
- `Assets/`: Directory containing the horse animation GIF

## Key Technologies

- **p5.js**: Core creative coding library (v1.4.0)
- Core p5.js functions used:
  - `setup()`: Initial canvas setup
  - `preload()`: Asset loading
  - `draw()`: Animation loop
  - Device rotation features (via `devicerotationY`)

## Development Patterns

1. **Asset Loading**
   - All images/GIFs should be placed in the `Assets/` directory
   - Use `loadImage()` in `preload()` for loading visual assets
   - Example: `horse = loadImage('Assets/HorseInMotion.gif')`

2. **Canvas Setup**
   - Canvas initialization happens in `setup()`
   - Default canvas size is 400x400 pixels

3. **Animation Logic**
   - Core animation code goes in the `draw()` loop
   - Device rotation integration uses the `devicerotationY` variable

## Local Development

1. The project requires a local web server due to p5.js image loading
2. Open `index.html` in a browser with local server support
3. Changes to `sketch.js` will be reflected upon browser refresh

## File Naming Conventions

- Asset files use PascalCase (e.g., `HorseInMotion.gif`)
- JavaScript files use camelCase (e.g., `sketch.js`)

Note: When working with this project, ensure any new animations or interactive elements respect the existing p5.js setup/draw pattern and maintain compatibility with device rotation features.