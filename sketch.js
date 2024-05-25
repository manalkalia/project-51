var player
var security1, security2
var ground
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10
var Play = 1;
var End = 0;
var gameState = Play;
var score = 0;


function preload() {
    groundImage = loadImage("floor.jpg");
    playerImage = loadImage("soldier.png");
    guardImage1 = loadImage("security.png");
    guardImage2 = loadImage("security.png");
    guardImage3 = loadImage("security.png");

}
function setup() {
    createCanvas(200, 500)

    //creating a player
    player = createSprite(150, 20, 15, 15)
    player.addImage("player", playerImage)
    player.scale = 0.5
    edges = createEdgeSprites();

    //creating first guard
    guard1 = createSprite(100, 50, 15, 15)
    guard1.addImage("guard1", guardImage1)
    guard1.scale = 0.5
    edges = createEdgeSprites();

    //creating second guard
    guard2 = createSprite(100, 50, 15, 15)
    guard2.addImage("guard2", guardImage2)
    guard2.scale = 0.5
    edges = createEdgeSprites();

    //creating third guard
    guard3 = createSprite(100, 50, 15, 15)
    guard3.addImage("guard3", guardImage3)
    guard3.scale = 0.5
    edges = createEdgeSprites();

    fill("grey")
    //creating obstacles
    b1 = createSprite(50, 30, 80, 10)
    b2 = createSprite(20, 70, 35, 10)
    b3 = createSprite(190, 70, 20, 10)
    b4 = createSprite(180, 95, 60, 10)
    b5 = createSprite(20, 120, 35, 10)
    b6 = createSprite(20, 135, 50, 10)
    b7 = createSprite(170, 150, 70, 10)
    b8 = createSprite(220, 200, 10, 30)
    b9 = createSprite(250, 10, 10, 20)
    b10 = createSprite(30, 150, 15, 10)

}
function draw() {
    background(groundImage)



    // if (keyDown === "Space") {
    //     gameState = Play;
    // }

    if (gameState === Play) {
        guard1.velocityX = 3;
        guard2.velocityX = 5
        guard3.velocityX = 7

        // key pressed settings
        if (keyDown(DOWN_ARROW)) {
            player.y -= 1
        }

        if (keyDown(UP_ARROW)) {
            player.y += 1
        }

        if (keyDown(LEFT_ARROW)) {
            player.x -= 1
        }

        if (keyDown(RIGHT_ARROW)) {
            player.x += 1
        }
        
        // checking the soldiers
        if(player.isTouching(guard1)  ||  player.isTouching(guard2)  ||  player.isTouching(guard3)){
            gameState=End;
        }
    }


    if (gameState === End){
        guard1.velocityX = 0;
        guard2.velocityX = 0
        guard3.velocityX = 0

        text("Press enter to restart !!!",200,200)
        
        fill("black")

        if (keyDown("enter")){
            gameState=Play;
            player.x=150
            player.y=20
        }
    }

}





