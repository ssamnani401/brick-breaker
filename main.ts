namespace SpriteKind {
    export const Edge = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const top = SpriteKind.create()
    export const Brick = SpriteKind.create()
    export const PowerUp = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Brick, function (sprite, otherSprite) {
    info.changeScoreBy(15)
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    numBricks += -1
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity((sprite.x - otherSprite.x) * 3, -1 * sprite.vy)
    if (sprite.vy >= -150) {
        sprite.vx += -5
    }
})
function createPowerUp () {
    for (let index = 0; index <= 6; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 1 . . . . . . . . . . 1 . . 
. 1 . . . . . . . . . . . . 1 . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. 1 . . . . . . . . . . . . 1 . 
. . 1 . . . . . . . . . . 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.PowerUp)
        }
    }
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Edge, function (sprite, otherSprite) {
    sprite.setVelocity(-1 * sprite.vx, sprite.vy)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(convertToText(numBricks))
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.top, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
function buildSetBricks () {
    for (let index = 0; index <= 6; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            createBrick(index * 16 + 32, col * 8 + 24)
            col += 1
        }
        col = 0
    }
}
function createBrick (x: number, y: number) {
    randNum = Math.randomRange(0, 2)
    if (randNum == 0) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f . 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . 
f f f f f f f f f f f f f f f . 
`, SpriteKind.Brick)
    } else if (randNum == 1) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f . 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
f f f f f f f f f f f f f f f . 
`, SpriteKind.Brick)
    } else {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f . 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
f f f f f f f f f f f f f f f . 
`, SpriteKind.Brick)
    }
    brick2.setPosition(x, y)
    numBricks += 1
}
let brick2: Sprite = null
let randNum = 0
let mySprite: Sprite = null
let col = 0
let numBricks = 0
info.setScore(0)
info.setLife(3)
numBricks = 0
let startBallVar = 0
scene.setBackgroundColor(8)
let paddle = sprites.create(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.Player)
paddle.setPosition(80, 110)
controller.moveSprite(paddle, 100, 0)
paddle.setFlag(SpriteFlag.StayInScreen, true)
let top = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.top)
top.setPosition(80, 0)
let left = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.Edge)
left.setPosition(0, 60)
let right = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.Edge)
right.setPosition(159, 60)
let ballVar = sprites.create(img`
. 1 1 . 
1 1 1 1 
1 1 1 1 
. 1 1 . 
`, SpriteKind.Ball)
col = 0
buildSetBricks()
game.onUpdate(function () {
    if (startBallVar == 0) {
        ballVar.setPosition(paddle.x, 105)
        ballVar.setVelocity(0, 0)
        if (controller.A.isPressed()) {
            startBallVar = 1
        }
    }
    if (startBallVar == 1) {
        ballVar.setVelocity(Math.randomRange(-30, 30), -50)
        startBallVar = 2
    }
    if (ballVar.x > 115) {
        startBallVar = 0
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (numBricks <= 0) {
        numBricks = 0
        startBallVar = 0
        effects.confetti.startScreenEffect()
        pause(100)
        effects.confetti.endScreenEffect()
        buildSetBricks()
        info.changeScoreBy(100)
    }
})
