namespace SpriteKind {
    export const z = SpriteKind.create()
    export const skeleton = SpriteKind.create()
    export const ms2 = SpriteKind.create()
}

function say_something(sprite: Sprite) {
    sprite.sayText("Hello")
}

let my_sprite = sprites.create(assets.image`mc`, SpriteKind.Player)
controller.moveSprite(my_sprite)
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_event_pressed() {
    say_something(my_sprite)
})
let burger = sprites.create(assets.image`burger`, SpriteKind.Food)
my_sprite.setPosition(randint(0, 160), randint(0, 120))
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
})
let enemy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
enemy.setPosition(randint(0, 160), randint(0, 120))
enemy.follow(my_sprite, 20)
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function on_overlap2(da_enemy: Sprite, da_player: Sprite) {
    info.changeLifeBy(-1)
    da_enemy.setPosition(randint(0, 160), randint(0, 120))
    da_player.setPosition(randint(0, 160), randint(0, 120))
})
let spr = sprites.create(assets.image`plate`, SpriteKind.z)
spr.setPosition(randint(0, 160), randint(0, 120))
spr.setScale(.5, ScaleAnchor.Middle)
sprites.onOverlap(SpriteKind.Player, SpriteKind.z, function on_overlap3(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(1)
    sprites.destroy(otherSprite)
    let enemy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
    enemy.setPosition(randint(0, 160), randint(0, 120))
    enemy.follow(my_sprite, 20)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_event_pressed2() {
    let h2 = sprites.create(assets.image`h2`, SpriteKind.ms2)
    h2.setPosition(randint(0, 160), randint(0, 120))
    h2.follow(enemy, 25)
    h2.setStayInScreen(true)
    h2.setBounceOnWall(true)
    info.changeScoreBy(-1)
})
sprites.onOverlap(SpriteKind.ms2, SpriteKind.Enemy, function on_overlap4(sprite: Sprite, otherSprite: Sprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
game.onUpdateInterval(10000, function on_update_interval() {
    let enemy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
    enemy.setPosition(randint(0, 160), randint(0, 120))
    enemy.follow(my_sprite, 20)
})
game.onUpdateInterval(5000, function on_update_interval2() {
    let spr = sprites.create(assets.image`plate`, SpriteKind.z)
    spr.setPosition(randint(0, 160), randint(0, 120))
    spr.setScale(.5, ScaleAnchor.Middle)
})
