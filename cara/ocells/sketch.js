function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

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
  //Ocell 
  fill (197, 33, 33)
  beginShape();
  vertex(80*sc,20*sc); 
  vertex(100*sc,20*sc);
  vertex(120*sc,30*sc);
  vertex(130*sc,40*sc);
  vertex(140*sc,60*sc);
  vertex(140*sc,60*sc);
  vertex(160*sc,70*sc-h);
  vertex(145*sc,70*sc); 
  vertex(160*sc,70*sc+h); 
  vertex(140*sc,80*sc); 
  vertex(120*sc,120*sc);
  vertex(100*sc,140*sc);
  vertex(95*sc,140*sc); 
  vertex(95*sc,155*sc); 
  vertex(100*sc,150*sc); 
  vertex(98*sc,155*sc); 
  vertex(102*sc,156*sc);
  vertex(98*sc,157*sc);
  vertex(100*sc,160*sc);
  vertex(95*sc,158*sc);
  vertex(90*sc,158*sc);
  vertex(90*sc,140*sc);
  vertex(70*sc,140*sc);
  vertex(70*sc,155*sc);
  vertex(75*sc,150*sc);
  vertex(73*sc,155*sc);
  vertex(77*sc,156*sc);
  vertex(73*sc,157*sc);
  vertex(75*sc,160*sc);
  vertex(70*sc,158*sc);
  vertex(65*sc,158*sc);
  vertex(65*sc,140*sc);
  vertex(60*sc,140*sc);
  vertex(40*sc,120*sc);
  vertex(35*sc,110*sc);
  vertex(35*sc,80*sc);
  vertex(40*sc,60*sc);
  vertex(50*sc,40*sc);
  vertex(60*sc,30*sc);
  vertex(80*sc,20*sc);
  endShape();
  
  //bec
  fill(253, 185, 75)
  beginShape();
  vertex(140*sc,60*sc);
  vertex(160*sc,70*sc-h);
  vertex(145*sc,70*sc); 
  vertex(160*sc,70*sc+h);
  vertex(140*sc,80*sc); 
  endShape();
  
  //ull
  fill(255,255,255)
  beginShape();
  vertex(100*sc,40*sc); 
  vertex(110*sc,50*sc);
  vertex(100*sc,60*sc);
  vertex(90*sc,50*sc);
  endShape(close);

  beginShape();
  vertex(100*sc,40*sc); 
  vertex(110*sc,50*sc);
  vertex(100*sc,60*sc);
  vertex(90*sc,50*sc);
  endShape(close);
   //pupila
  fill(0,0,0)
  beginShape();
  vertex(100*sc,45*sc); 
  vertex(105*sc,50*sc);
  vertex(100*sc,55*sc);
  vertex(95*sc,50*sc);
  endShape(close);
}
