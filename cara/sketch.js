let mic; //creem variable gloalper a un micròfon, ara es un espai a la memòria amb un nom.
function setup() {
 mic=new p5.AudioIn(); // la variable mix és una instància de la "classe entrada audio" (audioIn)
 //Hem creat un nou objecte de laclasse "entrada d àudio" 
 mic.start();
 createCanvas(600,400);
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
 background(127);
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


 console.log(vol);
 // El "console.log" ens serveixen per veure el valor de les variables en cada moment
 //
}
