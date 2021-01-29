// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;

function setup() {
  createCanvas(400, 400);
  c1 = color(255, 185, 185);
  c2 = color(255, 147, 188);
  c3 = color(242, 147, 255);;
}

function draw() {
   
  
  setGradient(0, 0 , width , height *1  , c1, c2, c3, Y_AXIS);

  //setGradient(0, height * 0.5 , width , height * 0.5  , c3, c2, c1, Y_AXIS);

  
  
  
  
  push();
  //rotate((HALF_PI)/2);
  translate( 0, 0);
  for (let i = 1; i <= 8; i++){
    translate( width * 0.1, height * 0.1);
    setGradient(0, 0 , width * 0.01 , height * 1.5 , c1, c2, c3, Y_AXIS);
  }
  pop();
  
   
   
  grdCircle(width * 0.4 , height*0.4, width * 0.55, c1, c2, c3); 
   
  push();
  //rotate(-HALF_PI/2);
  translate(width * 0.1, height * 0.2);
  for (let i = 1; i <= 3; i++){
    translate( width * 0.15, height * 0.15);
    //setGradient(0, 0 , width * 0.01 , height * 1.5 , c3, c2, c1, Y_AXIS);
    setTriangle(0,0, width * 0.5, c3, c2,c1);
    pop();
  }
  pop();
  
  
 
  
  push();
  //rotate((HALF_PI)/2);
  translate( width * 0.4, 0);
  for (let i = 1; i <= 8; i++){
    translate( width * 0.1, -height * 0.1);
    setGradient(0, 0 , width * 0.01 , height * 1.2 , c3, c2, c1, Y_AXIS);
  }
  pop();
  
  
  
  save("20210129.png");
  noLoop();
  
  
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x,(x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2), x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(i, y, i, y + h);
      if ( i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + h);
      }else{
        stroke(p);
        line(i, y, i, y + h);
      }
      
    }
  }
}

function setTriangle(x, y, h, c1, c2, c3 ){
  d = h;
  push();
  //translate( d * 0.2, d*0.2);
  for (let i = y; i <= y + d; i++) {
    let inter = map(i, y, (y + d) - (d/2), 0, 1);
    let c = lerpColor(c2, c1, inter);
    
    let inter02 = map(i, (y + d) - (d/2) ,  y + d , 0, 1);
    let p = lerpColor(c1, c3, inter02);
    
    line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);    
    if ( i <= (y + d) - (d/2)){
      stroke(c);
      line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);
    }else{
      stroke(p);
      line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);
    }
  }
}

function grdCircle(x, y, d, c1, c2, c3) {
 let c = 100;
 for (let i=0; i<c; i++) {
   let col = lerpColor(c1, c2, (i/c)*2 );
   let col02 = lerpColor(c2, c3, ((i - (c/2))/(c/2)));
   let a = lerp(PI, 0, i/c);
   
   if ( i <= c/2){
      fill(col);
      noStroke();
      arc(x, y, d, d, -a, a, CHORD);
    }else{
      fill(col02);
      noStroke();
      arc(x, y, d, d, -a, a, CHORD);
    }   

 }
}
