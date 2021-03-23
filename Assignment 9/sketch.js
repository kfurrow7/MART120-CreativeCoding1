var headX = 250;
var headY = 100;
var headDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(154,149,143);
    textSize(22)
    text("Hello!", 10,80);

    // head
    fill(250, 229, 211);
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }
    // eyes
    strokeWeight(7);
    circle(275,60,30);
    circle(220,60,30);


    // nose
    point(245,90);

    // mouth
    ellipse(245, 135, 30, 45)

    // hair
    fill(52,152,219);
    line(130,175,175,50);
    line(325,50,360,175);
    // body
    fill(255);

    fill(219, 52, 186  );
    rect(200,bodyY,100,150);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 450 )
    {
        bodyDirection *= -1;
    }


  //dress
    fill(78,120,143);
    strokeWeight(15);
    triangle(220,320,250,220,280,320);
// right arm
    fill(10, 24, 120);
    rect(300,195,50,10);
    // left arm
    rect(150,195,50,10);
    // left leg
    rect(200,335,10,50);
    // right leg
    rect(290,335,10,50);

    fill(227,2,122);
    textSize(22);
    text("Kendall Furrow",270,500 );


}
