let sc=5
let mic
function setup() {
 createCanvas(200*sc,170*sc);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let = vol =mic.getLevel();
  let h = map(vol,0,1,0,300);
  background(204);
 
 //Ocell esquerra
 beginShape();
 vertex(50,120);
 vertex(100,90);
 vertex(110,60);
 vertex(80,20);
 vertex(210,60);
 vertex(160,80);                                      
 vertex(200,90);
 vertex(140,100);
 vertex(130,120);
 endShape();
 fill(0);
 ellipse(155,60,8,8);
 
 //Ocell dret
 beginShape();
 vertex(370,120);
  vertex(360,90);
  vertex(290,80);
  vertex(340,70);
  vertex(280,50);
  vertex(420,10);
  vertex(390,50);
  vertex(410,90);
  vertex(460,120);
 endShape();
 fill(0);
 ellipse(345,50,10,10);









}
