var startTile;
var tile2;
var tile3;
var tile4;
var tile5;
var tile6;
var tile7;
var tile8;
var tile9;
var tile10;
var tile11;
var tile12;
var endTile;

var plr;
var button;

var atn1=0;
var atn2=atn1;
var atn3=atn1-atn2;


function preload(){
  
}

function setup() {
  createCanvas(800,400);
    startTile = new Tile();
    tile2 = new Tile();
    tile3 = new Tile();
    tile4 = new Tile();
    tile5 = new Tile();
    tile6 = new Tile();
    tile7 = new Tile();
    tile8 = new Tile();
    tile9 = new Tile();
    tile10 = new Tile();
    tile11 = new Tile();
    tile12 = new Tile();
    endTile = new Tile();

    plr = createSprite(60, 350, 20, 50);
    button = createSprite(400,100,80,40);
}

function draw() {

    if (mousePressedOver(button)) {
        tileSelect();
    }

    if (/*atn2 > atn1 + 1 &&*/ keyDown(RIGHT_ARROW) || keyDown(UP_ARROW)) {
        moveFoward();
    }

    if (/*atn3 < 0 &&*/ keyDown(LEFT_ARROW) || keyDown(DOWN_ARROW)) {
        moveBackward();
    }

  background(0);
    startTile.x = 20;
    startTile.y = 310;
    tile2.x = 111;
    tile2.y = 310;
    tile3.x = 202;
   tile3.y = 310;
   tile4.x = 293;
   tile4.y = 310;
   tile5.x = 384;
    tile5.y = 310;
    tile6.x = 475;
    tile6.y = 310;
    tile7.x = 566;
    tile7.y = 310;
    tile8.x = 657;
    tile8.y = 310;
    tile9.x = 657;
    tile9.y = 219;
    tile10.x = 657;
    tile10.y = 128;
    tile11.x = 657;
    tile11.y = 37;
    tile12.x = 565;
    tile12.y = 37;
    endTile.x = 475;
    endTile.y = 37;

    fill("green");
    startTile.display();
    fill("white");
    tile2.display();
    tile3.display();
    tile4.display();
    tile5.display();
    tile6.display();
    tile7.display();
    tile8.display();
    tile9.display();
    tile10.display();
    tile11.display();
    tile12.display();
    fill("red");
    endTile.display();
    noFill();

    fill("white");
    textSize(40);
    text(atn1, 400, 200);
    drawSprites();

  //drawSprites();
}

function tileSelect() {
    atn1 = Math.round(random(1, 6));
}

function moveFoward() {
    atn2 -= 1;
    atn3 += 1;
    console.log("f");
    if (plr.x < 657) {
        plr.x += 91;
    } else {
        plr.y += 91;
    }
}

function moveBackward() {
    atn3 -= 1;
    atn2 += 1;
    console.log("b");
    if (plr.y > 310) {
        plr.y -= 91;
    } else {
        plr.x -= 91;
    }
}

