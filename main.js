function setup() {
    canvas=createCanvas(640,420);
    canvas.center;

} 

img="";


function preload() {
img=loadImageI(dog_cat.jpg);

}

function draw() {
    image(img,0,0,640,420);
    stroke("red");
    rect(30,60,450,350);
    text("dog",45,75);
}