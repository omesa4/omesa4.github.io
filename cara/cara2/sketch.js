let mic;
let bgColor;

function setup() {
  mic = new p5.AudioIn();
  mic.start();
  createCanvas(600, 400);
  bgColor = color(200, 220, 255);
}

function draw() {
  background(bgColor);

  let faceX = 300;
  let faceY = 200;
  let leftEyeSize = 30 + 10 * cos(frameCount * 0.1);
  let rightEyeSize = 30 + 10 * sin(frameCount * 0.1);
  let vol = mic.getLevel();
  let h = map(vol, 0, 0.2, 0, 100, true); // Ajustamos el rango para mayor sensibilidad

  fill(198, 134, 98); // Cara
  ellipse(faceX, faceY, 245, 300);

  fill(255, 255, 255); // Ojos
  ellipse(faceX - 50, faceY - 50, 50, leftEyeSize);
  ellipse(faceX + 50, faceY - 50, 50, rightEyeSize);

  fill(110, 74, 38); // Iris
  ellipse(faceX - 50, faceY - 50, 25, leftEyeSize / 2);
  ellipse(faceX + 50, faceY - 50, 25, rightEyeSize / 2);

  fill(0, 0, 0); // Pupilas
  ellipse(faceX - 50, faceY - 50, 16, leftEyeSize / 2 - 2);
  ellipse(faceX + 50, faceY - 50, 16, rightEyeSize / 2 - 2);

  fill(0, 0, 0); // Cabello
  arc(faceX, faceY - 95, 195, 120, PI, 0);

  fill(183, 33, 43); // Boca con movimiento
  arc(faceX, faceY + 50, 120, 50 + h, 0, PI);

  fill(255, 215, 0); // Diente de oro
  square(261, 250, 12, 2);
  
  fill(255, 255, 255); // Dientes blancos
  square(274, 250, 12, 2);
  square(305, 250, 15, 2);
  square(287, 250, 15, 2);
  square(321, 250, 12, 2);
  square(334, 250, 12, 2);

  fill(0, 0, 0); // Bigote
  rect(240, 225, 120, 20);
  
  noStroke()
  fill(198, 134, 98); // Detalle de bigote
  triangle(300, 245, 310, 222, 290, 222);
  
  stroke(0); // Nariz
  line(330, 210, 300, 180);
  line(330, 210, 300, 220);
}
