var lpkidsred;
var lpkidsgreen;
var lpkidsblue;
var lpkidsgray;
var television;

function preload(){
    lpkidsgray = loadImage("images/lpkids-gray.png");
    lpkidsred = loadImage("images/lpkids-red.png");
    lpkidsgreen = loadImage("images/lpkids-green.png");
    lpkidsblue = loadImage("images/lpkids-blue.png");
    television = loadImage("images/old-tv.png");
}

function setup(){
    createCanvas(749,524);
}

function draw(){
    if(keyIsPressed){
        if(key=="r"){
            image(lpkidsred, 0, 0);
        }
        if(key=="g"){
            image(lpkidsgreen, 0, 0);
        }
        if(key=="b"){
            image(lpkidsblue, 0, 0);
        }
        if(keyCode=="32"){
            fill(0);
            rect(0, 0, 500, 374);
            blendMode(LIGHTEST);
            image(lpkidsred,0,0);
            image(lpkidsgreen,0,0);
            image(lpkidsblue,0,0);
        }
    }
    else{
        blendMode(NORMAL);
        image(lpkidsgray,100, 100);
        image(television, 0, 0);
    }
}