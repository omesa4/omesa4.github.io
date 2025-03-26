let mic; //creem variable gloalper a un micròfon, ara es un espai a la memòria amb un nom.
let bgColor;        // Variable per emmagatzemar el color de fons actual.
function setup() {
 mic=new p5.AudioIn(); // la variable mix és una instància de la "classe entrada audio" (audioIn)
 //Hem creat un nou objecte de laclasse "entrada d àudio" 
 mic.start();
 createCanvas(600,400);
 bgColor = color(200, 220, 255); // Color de fons inicial (un blau clar).

}

function draw() {
 let faceX=300;
 let faceY=200;
 let leftEyeSize = 30+10*cos(frameCount*0.1);//mida variable segons el temps
 let rightEyeSize = 30+10*sin(frameCount*0.1);//mida variable segons el temps
 let vol=mic.getLevel(); //Apliquem el mètode "getLevel" que ens donarà el nivell de volum entre 0 i 1
 //Registrat pel objecte "mic" que és una entrada de àudio. Aquell número el guardarem en una variable local
 //Perquè afecta nomès al "draw" a diferència de la variable global "mic" que està al principi i afecta a tot el codi.
 //El punt que hi ha entre "mic" i "getLevel" és molt important, s'anomena la sintaxi del punt o "dot syntax" Aquest punt aplica mètode a objectes
 //És un sistema que et permet crear qualseol cosa i que fai qualseol cosa
 let h = map(vol,0,1,0,300); //"map"és una funció molt potent que el que fa és que onverteix
 // El que fa es converit els numeros de volum que esan entre 0 i 1, sempre en una escala proporciona o mapejada
 // Entre es números 0 i 300, vol dir que si el volum  fos 0,5 es converteix  150 i s'emmagatzema en "h"
 // Si el número és 0,33 de volum es convertira en 100 de "h" o alçada de la boca o arc.
 // Si el número és 0,67 de volum es convertira en 200 de "h" o alçada de la boca o arc.
 let x = 200 * noise(0.1 * frameCount);
 let y = 200 * noise(0.1 * frameCount + 100);
 // Noise és un tipus de soroll anomenat Perlin que va ser famòs perquè va fer videojocs gràcies a les variacions suaus de números aleatoris
 // que fa aquesta funció. Permet fer números pseudoaleatoris propers
  let ales = 10*random(1);
  background(bgColor);  // Pinta el fons amb el color actual.
fill(0);
  print(20, 20, "Fotogrames: ", frameCount);
  print("Noise: ", noise);
  print("Tamany ull esquerra: ", leftEyeSize);
  print("Tamany ull dret: ", rightEyeSize);
  print("Volum: ", vol);
  textSize(12);
  //text("Fotogrames: " + frameCount, 50 , 100);
  //text("Noise: " + noise, 50 , 100);
  //text("Tamany ull esquerra: " + leftEyeSize, 50 , 100);
  //text("Tamany ull dret: " + rightEyeSize, 50 , 100);
  //text("Volum: " + vol, 50, 100);
  //text("Ales: " + ales);
  text("Cara con mosca" , 50, 350)
  fill(255,223,196);//cara
 ellipse(faceX,faceY,220,300);
 fill(81,209,246);//ulls
 ellipse(faceX-50,faceY-50,50,leftEyeSize);
 ellipse(faceX+50,faceY-50,50,rightEyeSize);
 fill(0,0,0);//pupil·la
 ellipse(faceX-50,faceY-50,25,leftEyeSize/2);
 ellipse(faceX+50,faceY-50,25,rightEyeSize/2);
 fill(0,0,0);
 arc(faceX, faceY + 50, 120, 30+h, 0, PI); // La variable "h" determina la alçada de la boca 
 fill(255);
 noStroke();
 ellipse(x-10,y, 15+ales,25);
 ellipse(x+10,y, 15+ales,25);
 fill(0);
 ellipse(x,y,10,20);
}

 /* Funció per canviar el color de fons:
       Utilitza random() per generar components RGB aleatoris dins d'un interval.
       Aquesta funció es crida en prémer el botó "Canvia Fons". */
       function changeBackground() {
        bgColor = color(random(100, 255), random(100, 255), random(100, 255));
      }
