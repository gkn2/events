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
enemy.follow(my_sprite, 50)
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function on_overlap2(da_enemy: Sprite, da_player: Sprite) {
    info.changeLifeBy(-1)
    da_enemy.setPosition(randint(0, 160), randint(0, 120))
    da_player.setPosition(randint(0, 160), randint(0, 120))
})
