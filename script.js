const myImage = new Image();
myImage.src = "image.png";

myImage.addEventListener('load', function(){
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  canvas.width = 600;
  canvas.height = 600;
  ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;
  const particlesArray = [];
  const numberOfParticles = 5000;
  let mappedImage = [];
  let maxBrightness = Number.MIN_VALUE;
  for (let i = 0; i < pixels.length; i += 4) {
    const red = pixels[i];      
    const green = pixels[i + 1]; 
    const blue = pixels[i + 2];  
    const pixelIndex = i / 4;   
    const x = pixelIndex % canvas.width;   
    const y = Math.floor(pixelIndex / canvas.width); 
    const brightness = calculateRelativeBrightness(red, green, blue);
    if (!mappedImage[y]) {
        mappedImage[y] = [];
    }
    if (brightness > maxBrightness) {
        maxBrightness = brightness;
    }
    mappedImage[y][x] = brightness;
  }
  function animatePixels() {
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.05;
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < particlesArray.length; i++){
      particlesArray[i].update();
      particlesArray[i].draw();
    }
    requestAnimationFrame(animatePixels);
  }

  function calculateRelativeBrightness(red, green, blue){
    return Math.sqrt((red * red) * 0.299 + (green * green) * 0.587 + (blue * blue) * 0.114) / 100;
  }

  class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.positionX = Math.floor(this.x);
        this.positionY = Math.floor(this.y);
        this.velocity = Math.random() * 0.5;
        this.speed = 0;
        this.size = Math.random() * 1.5 + 1;
    }

    update() {
        this.positionX = Math.floor(this.x);
        this.positionY = Math.floor(this.y);
        this.speed = mappedImage[this.positionY][this.positionX];
        let movement = (maxBrightness - this.speed) * 1.5 + this.velocity;
        if(movement>=0){
            this.y += movement;
        }
        
        if (this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}


  function init() {
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }

  init();
  animatePixels();
});
