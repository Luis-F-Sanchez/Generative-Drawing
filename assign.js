window.alert('Use arrow keys to change radius and speed of ratations');
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//global var

let speed = 0;
let count = 0;

let Xpos = 50;
let Ypos = 550;

let RposX = Math.random();
let RposY = Math.random();

let noiseScale = 0.01;

let rInc = 0;
let sInc = 0;


//[purple, navy blue, deep violet, blue?, yellow]
colorsList = [[91, 0, 118], 
            [0, 0, 0], 
            [30, 0, 60], 
            [0, 0, 190], 
            [202, 209, 0]]

function draw() {
  background(colorsList[2]);


  //inner clockwise
  fill(colorsList[4]);
  newRing(10, 10, 7+rInc*0.5,  1000+sInc);
  newRing(15, 15, 25+rInc,     1000+sInc);
  newRing(20, 20, 50+rInc*1.5, 1000+sInc);
  newRing(25, 25, 75+rInc*2,   1000+sInc);
  newRing(20, 20, 100+rInc*2.5,1000+sInc);
  newRing(20, 20, 125+rInc*3,  1000+sInc);

  //inner counterclock
  newRing(10, 10, 7+rInc*0.5,   -1000-sInc);
  newRing(15, 15, 25+rInc,      -1000-sInc);
  newRing(20, 20, 50+rInc*1.5,  -1000-sInc);
  newRing(25, 25, 75+rInc*2,    -1000-sInc);
  newRing(20, 20, 100+rInc*2.5, -1000-sInc);
  newRing(20, 20, 125+rInc*3,   -1000-sInc);

  //smaller ring counter
  newRing(16, 16, 50+rInc,     -301-sInc);
  newRing(15, 15, 25+rInc*0.5, -300-sInc);
  newRing(20, 20, 85+rInc*2,   -303-sInc);
  newRing(17, 17, 70+rInc*1.5, -302-sInc);

  //smaller ring clock
  newRing(16, 16, 50+rInc,     301+sInc);
  newRing(15, 15, 25+rInc*0.5, 300+sInc);
  newRing(20, 20, 85+rInc*2,   303+sInc);
  newRing(17, 17, 70+rInc*1.5, 302+sInc);


  //outer clockwise 
  fill(colorsList[1]);
  newRing(35, 35, 375+rInc*5, 1008+sInc);
  newRing(30, 30, 350+rInc*5, 1004+sInc);
  newRing(25, 25, 325+rInc*5, 1000+sInc);

  //train CC
  fill(colorsList[0]);
  newRing(20, 20, 325+rInc*5, 2000+sInc);
  newRing(20, 20, 325+rInc*5, 1950+sInc);
  newRing(20, 20, 325+rInc*5, 1900+sInc);
  newRing(20, 20, 325+rInc*5, 1850+sInc);
  newRing(20, 20, 325+rInc*5, 1800+sInc);
  newRing(20, 20, 325+rInc*5, 1750+sInc);
  newRing(20, 20, 325+rInc*5, 1700+sInc);
  newRing(20, 20, 325+rInc*5, 1650+sInc);
  newRing(20, 20, 325+rInc*5, 1600+sInc);

  //alt train CW
  newRing(20, 20, 275+rInc*1.25, -1900-sInc);
  newRing(20, 20, 265+rInc*1.5, -1875-sInc);
  newRing(20, 20, 255+rInc*1.75, -1850-sInc);
  newRing(20, 20, 245+rInc*2.0, -1825-sInc);
  newRing(20, 20, 235+rInc*2.25, -1800-sInc);
  newRing(20, 20, 225+rInc*2.5, -1775-sInc);
  newRing(20, 20, 215+rInc*2.75, -1750-sInc);
  newRing(20, 20, 205+rInc*3.0, -1725-sInc);
  newRing(20, 20, 195+rInc*3.25, -1700-sInc);
  newRing(20, 20, 185+rInc*3.5, -1675-sInc);

  //lil star
  fill(500, 500, 500);
  newRing(15, 15, 140+rInc*1.8, -750-sInc);

}

function newRing(w, h, r, s) {
push();
rectMode(CENTER);
translate(width / 2, height / 2);
translate(p5.Vector.fromAngle(millis() / s, r));
rect(0, 0, w, h);
pop();
}

function keyPressed() {
//raduis change
if (keyCode === LEFT_ARROW) {
  if (rInc <= -30) {
      rInc = rInc;
      } else {
        rInc = rInc - 10;
      }
} else if (keyCode === RIGHT_ARROW) {
  rInc = rInc + 10;
}
console.log(rInc);

//speed change
if (keyCode === DOWN_ARROW) {
  sInc = sInc + 100;
} else if (keyCode === UP_ARROW) {
  sInc = sInc - 100;
}
console.log(sInc);

}



function extraSt(){
rect (400, 300, 100);
  if ((400 <= mouseX) && (mouseX <= 500) && (300 <= mouseY) && (mouseY <= 400)) {
      //left circ
      ellipse(200,mouseY,80,80);
      //top circ
      ellipse(mouseX,Xpos,80,80);
      //right circ
      ellipse(700, mouseY, 80, 80);
      //bottom circ
      ellipse(mouseX, Ypos, 80, 80);

  while (count <= 100) {
      Xpos = Xpos + 1;
      count++;
  }
  }
triangle(mouseX, mouseY+50, mouseX+25, mouseY-25, mouseX-25, mouseY-25);

for (let x=0; x < width; x++) {
  let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
  stroke(30, 0, mouseY-100);
  line(x, mouseY+noiseVal*90, x, height);
}
}
