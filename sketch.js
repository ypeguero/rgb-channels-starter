var redPicture;
var greenPicture;
var bluePicture;
var grayPicture;
var television;

function preload(){
    redPicture = loadImage("images/lp-guild-red.png");
    greenPicture = loadImage("images/lp-guild-green.png");
    bluePicture = loadImage("images/lp-guild-blue.png");
    grayPicture = loadImage("images/lp-guild-gray.png");
    television = loadImage("images/old-tv.png");
}

function setup(){
    createCanvas(749,524)/*.parent(sketch-holder)*/;
}

function draw(){
    if(keyIsPressed){
        if(key=="r"){
            image(redPicture,50,50);
        }
        if(key=="g"){
            image(greenPicture,50,50);
        }
        if(key=="b"){
            image(bluePicture,50,50);
        }
        if(keyCode== 32){
            fill(0);
            rect(50, 50, 500, 374);
            blendMode(LIGHTEST);
            image(redPicture,50,50);
            image(bluePicture,50,50);
            image(greenPicture,50,50);
        }
    }
    else{
        image(grayPicture,50,50);
    }
    blendMode(NORMAL);
    image(television,0,0);
}