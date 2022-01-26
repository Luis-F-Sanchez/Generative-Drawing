function setup(){
    createCanvas(windowWidth, windowHeight);
}


let x = 0;
let speed = 5;
let y = 3;

console.log(x);

newList = [200, 100, 255, 300, 600, 800]
console.log(newList)
//call value from newList
numfive = newList[5];
numfour = newList[4];
numone = newList[2];

function draw() {
    background(128, 0, 128);

    /*
    //left circle
    strokeWeight(4);
    stroke(0, 0, 255);
    fill(0, 110, 255);
    circle(200, 200, 10);

    //top circle
    strokeWeight(2);
    stroke(255, 0, 255);
    fill(110, 255, 0);
    circle(200, 200, 10);

    noFill();
    strokeWeight(1);
    stroke(0, 110, 255);
    circle(300, 300, 20);

    //black curve 1 
    noFill();
    stroke(255, 102, 0);
    line(300, 20, 10, 10);
    line(83, 87, 150, 80);
    stroke(0, 0, 0);
    bezier(400, 20, 10, 10, 90, 90, 150, 80);

    //curve 2
    noFill();
    stroke(255);
    bezier(200, 300, 0, 100, 100, 0, 100, 0, 0, 0, 100, 0);

    //curve 3
    bezier(400, 20, 10, 100, 90, 90, 300, 200);


    //rectangle
    rect(300, 200, 200, 300);


    x = x + speed;
    if (x > windowWidth){
        speed = speed * (-1);
    }
    */
    
    //new picture
    
    //half of canvas black
    rect(0, 0, 400, 800);
    fill(0, 0, 0);

    //lines
    line(75, 150, numfive-50, numfour+25);
    stroke(9000);
    strokeWeight(2);

    line(50, 50, numfive, numfour);
    stroke(9000);
    strokeWeight(2);

    line(100, 300, numfour+50, numfour+50);
    stroke(9000);
    strokeWeight(2);

    line(100, 450, 400, numfour+50);
    stroke(9000);
    strokeWeight(2);
    
    


    /*
    for (let i = 0; i < newList.length; i++) {
        
      }
    */
}

function newLines () {
    line(numone+25, 250, numfour-50, numfour+50);
    stroke(9000);
    strokeWeight(2);
}




/*
sample text
extra extra
eeeeeeeeeeee
*/

