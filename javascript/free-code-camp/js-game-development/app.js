const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 600
const SPRITE_WIDTH = 573
const SPRITE_HEIGHT = 523
const STAGGER_FRAMES = 5

const PLAYER_IMAGE_PATH = "resources/shadow_dog.png"

const canvas = document.getElementById('canvas1')
const context = canvas.getContext('2d')

canvas.width = CANVAS_WIDTH
canvas.height = CANVAS_HEIGHT

const playerImage = new Image()
playerImage.src = PLAYER_IMAGE_PATH

let frameX = 0
let frameY = 1
let gameFrame = 0

function animate() {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    let position = Math.floor(gameFrame / STAGGER_FRAMES) % 6

    // context.fillRect(50, 50, 100, 100) // posX, posY, width, height
    //context.drawImage(playerImage, ) // imageToDraw, sx, sy, sw, sh, dx, dy, dw, dh
    context.drawImage(playerImage, frameX * SPRITE_WIDTH, frameY * SPRITE_HEIGHT, SPRITE_WIDTH, SPRITE_HEIGHT, 0, 0, SPRITE_WIDTH, SPRITE_HEIGHT)

    if (gameFrame % STAGGER_FRAMES == 0) {
        if (frameX < 6) {
            frameX++
        } else {
            frameX = 0
        }
    }
    
    gameFrame++
    requestAnimationFrame(animate) // execute our animation loop
}

animate()
