
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

var headX = 250;
var headY = 100;
var headDirection = 1;



//clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(800, 800);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
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



     // speed
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // movement
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
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
