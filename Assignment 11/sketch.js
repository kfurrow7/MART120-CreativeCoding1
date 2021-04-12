
var characterX = 100;
var characterY = 100;

var k = 75;
var j = 74;
var l = 76;
var i = 73;

var w = 87;
var s = 83;
var a = 65;
var d = 68;


var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var headX = 250;
var headY = 100;
var headDirection = 1;



//clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(800, 800);
    shapeXs[0] = 50;
    shapeYs[0] = 50;
    diameters[0] = 25;

    shapeXs[1] = 150;
    shapeYs[1] = 150;
    diameters[1] = 125;
    
    // get a random speed when the it first starts
    for (var i=0; i < 50; i++) {
    shapeXSpeed [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
    shapeYSpeed [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
    shapeXs [i] = getRandomNumber(500);
    shapeYs [i] = getRandomNumber(600);
    diameters [i] = getRandomNumber(30);

}

createcharacter(200,350);

}

function draw()
{
    background(204, 204, 255);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);

    textSize(22);
    fill(179, 255, 255)
    text("EXIT", width-70,height-50,)

    //circle
    fill(179,255,255);
    circle(characterX,characterY,50);

    fill(250, 229, 211);
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }

//Character (200,350);
drawcharacter();
charcterMovement();

    // keys
    if(keyIsDown(i))
    {
        characterY -= 10;
    }
    if(keyIsDown(k))
    {
        characterY += 10;
    }
    if(keyIsDown(j))
    {
        characterX -= 10;
    }
    if(keyIsDown(l))
    {
        characterX += 10;
    }


    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterY += 10;
    }
    if(keyIsDown(a))
    {
        characterX -= 10;
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }

    // moving shape
    fill(13,145,14);
    circle(shapeX, shapeY, 20);

    for (var i = 0; i < shapeXs.length; i++) {
      circle(shapeXs[i], shapeYs[i], diameters[i]);




     // speed
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // movement
    shapeXs [i] += shapeXSpeeds[i];
    shapeYs [i] += shapeYSpeeds[i];

    if (shapeXs[i] > width) {
      shapeXs[i] = 0;
    }


    }
    if(shapeXs[i] < 0) {
      shapeXs[i] = width;


    }
    if(shapeYs[i] > height) {
      shapeYs[i] = 0;

    }
    if(shapeYs[i] < 0) {
      shapeYs[i] = height;

    }

    // circle and exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(10);
        textSize(50);
        text("You Win!", width/2-50, height/2-50);
    }

    // square click
    fill(179,255,179);
    square(mouseShapeX, mouseShapeY, 40);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

}
function createcharacter(x,y)
{
  characterX = x;
  characterY = y;
  console.log(characterX);
}

function drawcharacter()
{
    fill(23,40,123);
    circle(characterX,characterY,25);
}
