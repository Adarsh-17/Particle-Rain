# Particle Image Animation

This project creates a particle-based animation where particles move in response to the brightness of an image's pixels, generating a dynamic visual effect. Using HTML5 canvas and JavaScript, the image is analyzed, and particles fall with varying speeds based on pixel brightness. The animation provides an interactive and customizable display of image-based particle movement.

## Demo

[Live demo here!](https://adarsh-17.github.io/Particle-Rain/)

Particles are initialized on top of the image and move downward based on the brightness of each pixel in the image. Brighter areas result in slower particle movement, while darker areas cause particles to fall faster.

## Features

- Loads an image and draws it onto a canvas.
- Particles are generated dynamically and move based on the brightness of the pixels.
- Particles interact with the canvas and simulate movement effects.
- Adjustable number of particles for performance tuning.

## Technology Used

- **HTML5 Canvas**: For rendering the image and particles on a web page.
- **JavaScript**: Manages the logic for image processing, particle creation, and animation.
- **CSS**: Can be optionally used for canvas styling (not included in this example).

## How It Works

1. **Load Image:** The image (`batman.png`) is loaded into the browser using the `Image()` object and drawn onto the canvas.
2. **Image Brightness Mapping:** The brightness of each pixel in the image is calculated using relative brightness formulas, taking the red, green, and blue (RGB) values.
3. **Particle Movement:** Particles are initialized at random positions along the top of the canvas. They fall downwards at varying speeds depending on the brightness of the pixels below them.
4. **Animation Loop:** A continuous loop (`requestAnimationFrame`) ensures particles are updated and rendered frame by frame.


