


<!DOCTYPE html>
<html lang="ca">
<head>
  <meta charset="UTF-8">
  <title>Art Geomètric Amb Expressió Facial</title>
  <!-- Llibreria p5.js per fer gràfics interactius -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/p5.js"></script>
  <!-- Llibreria ml5.js per reconeixement facial amb machine learning -->
  <script src="https://cdn.jsdelivr.net/gh/ml5js/Intro-ML-Arts-IMA@ml5-build-10-7-19/ml5_build/ml5.min.js"></script>
  <style>
    /* Estil general del cos de la pàgina */
    body {
      margin: 0; /* sense marges externs */
      padding: 0; /* sense espais interns */
      background-color: #f4f4f4; /* color de fons gris clar */
      display: flex; /* fa servir flexbox per alinear */
      justify-content: center; /* centra horitzontalment */
      align-items: center; /* centra verticalment */
      height: 100vh; /* alçada de tota la pantalla */
    }

    /* Pantalla de càrrega quan els models encara es carreguen */
    #loading-screen {
      position: fixed; /* fixa la posició a la pantalla */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255,255,255,0.9); /* blanc amb transparència */
      display: flex;
      flex-direction: column; /* columna vertical */
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
      font-size: 18px;
      color: #333; /* gris fosc */
      z-index: 10; /* per sobre de tot */
    }

    /* Rodona animada de càrrega */
    .loader {
      width: 50px;
      height: 50px;
      border: 6px solid #3498db; /* blau */
      border-top: 6px solid transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 10px;
    }

    /* Animació de gir */
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <!-- Div visible mentre es carreguen els models -->
  <div id="loading-screen">
    <div class="loader"></div>
    <p>Carregant models, si us plau, espera...</p>
  </div>
  <script>
    // Variables globals
    let faceapi, detections = [], video;
    let modelsMostrats = false;

    // Mida virtual que es manté proporcional a qualsevol pantalla
    const VIRTUAL_W = 800;
    const VIRTUAL_H = 600;

    // Funció que es crida al començar
    function setup() {
      createCanvas(windowWidth, windowHeight); // crea una zona de dibuix de la mida de la finestra
      video = createCapture(VIDEO);            // activa la webcam
      video.size(480, 480);                    // estableix la mida del vídeo
      video.hide();                            // amaga el vídeo per defecte

      // Configura els paràmetres del reconeixement facial
      const options = {
        withLandmarks: true,
        withExpressions: true,
        withDescriptors: false
      };
      faceapi = ml5.faceApi(video, options, modelReady); // inicialitza el model amb la webcam
    }

    // Redimensiona el canvas si canvia la mida de la finestra
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }

    // Quan el model està carregat correctament
    function modelReady() {
      faceapi.detect(gotResults); // comença a detectar cares
    }

    // Quan hi ha resultats del model
    function gotResults(err, result) {
      if (err) return console.error(err); // mostra error si hi ha
      detections = result; // desa les dades de la detecció
      if (!modelsMostrats) {
        document.getElementById("loading-screen").style.display = "none";
        modelsMostrats = true;
      }
      faceapi.detect(gotResults); // torna a detectar de forma continua
    }

    // Funció de dibuix
    function draw() {
      background(255); // fons blanc

      // Inicialitzem l'estat emocional detectat
      let dominant = "neutral", intensity = 0;
      if (detections.length > 0) {
        let expr = detections[0].expressions;
        dominant = Object.keys(expr).reduce((a, b) => expr[a] > expr[b] ? a : b);
        intensity = expr[dominant];
      }

      // Calcular escala i marges per centrar el dibuix virtual a la pantalla
      let scaleFactor = min(width / VIRTUAL_W, height / VIRTUAL_H);
      let offsetX = (width - VIRTUAL_W * scaleFactor) / 2;
      let offsetY = (height - VIRTUAL_H * scaleFactor) / 2;

      // Aplicar transformacions per mantenir el dibuix centrat i escalat
      push(); // desa l'estat de transformació
      translate(offsetX, offsetY); // desplaça l'origen
      scale(scaleFactor); // redimensiona proporcionalment
      drawArt(dominant, intensity); // dibuixa la figura segons l'expressió
      pop(); // recupera l'estat anterior

      // Mostra el text amb l'expressió dominant (fora de transformacions)
      noStroke();
      fill(44,169,225);
      textSize(32);
      textAlign(CENTER, TOP);
      text("Expressió: " + dominant, width / 2, 10);
      textSize(24);
      text("Intensitat: " + intensity * 100 + "%", width / 2, 50);

      // Mostra el vídeo si hi ha detecció
      if (detections.length > 0) {
        image(video, width - 140, height - 140, 120, 120);
      }
    }

    // Dibuixa diferents figures depenent de l'estat emocional
    function drawArt(dominant, intensity) {
      noFill();
      strokeWeight(4);

        switch (dominant) {
        case "happy":
        stroke(255,203,219);
        fill(255 * intensity,203 * intensity,219 * intensity);
        scale(intensity);
        ellipse(300,238,387,387);
        break;

        case 'sad':
          stroke(50,100,200,150); // blau
          beginShape();
          for (let x = 0; x <= 400; x += 40)
            vertex(200 + x, 300 + 100 * intensity);
          for (let x = 400; x >= 0; x -= 40)
            vertex(200 + x, 300 - 50 * intensity);
          endShape(CLOSE);
          break;

        case 'angry':
          stroke(200,0,0,150); // vermell
          beginShape();
          for (let i = 0; i < 16; i++) {
            let angle = map(i, 0, 16, 0, TWO_PI);
            let r = i % 2 ? 100 : 175;
            let x = VIRTUAL_W/2 + r * cos(angle);
            let y = VIRTUAL_H/2 + r * sin(angle);
            vertex(x, y);
          }
          endShape(CLOSE);
          break;

        case 'fearful':
          stroke(100,100,100,150); // gris
          beginShape();
          for (let x = 0; x <= VIRTUAL_W; x += 10) {
            let y = VIRTUAL_H/2 + 50 * sin((x - VIRTUAL_W/2) * 0.05) * intensity;
            vertex(x, y);
          }
          endShape();
          break;

        case 'surprised':
          stroke(0,150,255,150); // blau clar
          beginShape();
          for (let i = 0; i < 20; i++) {
            let angle = random(TWO_PI);
            let r = 50 + 100 * intensity;
            let x = VIRTUAL_W/2 + r * cos(angle);
            let y = VIRTUAL_H/2 + r * sin(angle);
            vertex(x, y);
          }
          endShape(CLOSE);
          break;

        case 'disgusted':
          stroke(0,150,0,150); // verd
          beginShape();
          for (let i = 0; i < 12; i++) {
            let angle = map(i, 0, 12, 0, TWO_PI);
            let r = 75 + random(-50, 50) * intensity;
            let x = VIRTUAL_W/2 + r * cos(angle);
            let y = VIRTUAL_H/2 + r * sin(angle);
            vertex(x, y);
          }
          endShape(CLOSE);
          break;

        default:
          stroke(150,150,150,150); // gris suau
          beginShape();
          vertex(0, 0);
          vertex(VIRTUAL_W, 0);
          vertex(VIRTUAL_W, VIRTUAL_H);
          vertex(0, VIRTUAL_H);
          endShape(CLOSE);
      }
    }
  </script>
</body>
</html>
