var space, spaceImg
var pilot, pilotImg, pilotImg2
var aliens, aliensImg


function preload() {
spaceImg = loadImage("./assets/spaceImg.png")
pilotImg = loadImage("./assets/pilotImg.png")
alienImg = loadImage("./assets/aliensImg.png") 
}

function setup() {

 crateCanvas(windowWidth, windowHeight);
 space = createSprite(displayWidth/2, displayHeight/2, 30,30)

}