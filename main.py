@namespace
class SpriteKind:
    z = SpriteKind.create()
    skeleton = SpriteKind.create()
    ms2 = SpriteKind.create()



def say_something(sprite: Sprite): 

    sprite.say_text("Hello") 

my_sprite = sprites.create(assets.image("""mc"""), SpriteKind.player)
controller.move_sprite(my_sprite)


def on_event_pressed():
    say_something(my_sprite)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_event_pressed)

burger = sprites.create(assets.image("""burger"""), SpriteKind.food)
my_sprite.set_position(randint(0, 160), randint(0, 120))

def on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    otherSprite.set_position(randint(0,160), randint(0,120))
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_overlap)


enemy = sprites.create(assets.image("""enemy"""), SpriteKind.enemy)

enemy.set_position(randint(0,160), randint(0,120))
enemy.follow(my_sprite, 20)

def on_overlap2(da_enemy, da_player):
    info.change_life_by(-1)
    da_enemy.set_position(randint(0,160), randint(0,120))
    da_player.set_position(randint(0,160), randint(0,120))
sprites.on_overlap(SpriteKind.enemy, SpriteKind.player, on_overlap2)

spr = sprites.create(assets.image("""plate"""), SpriteKind.z)
spr.set_position(randint(0,160), randint(0,120))
spr.set_scale(.5, ScaleAnchor.MIDDLE)

def on_overlap3(sprite, otherSprite):
    info.change_life_by(1)
    sprites.destroy(otherSprite)
    enemy = sprites.create(assets.image("""enemy"""), SpriteKind.enemy)
    enemy.set_position(randint(0,160), randint(0,120))
    enemy.follow(my_sprite, 20)
sprites.on_overlap(SpriteKind.player, SpriteKind.z, on_overlap3)

def on_event_pressed2():
    h2 = sprites.create(assets.image("""h2"""), SpriteKind.ms2)
    h2.set_position(randint(0, 160), randint(0, 120))
    h2.follow(enemy, 25)
    h2.set_stay_in_screen(True)
    h2.set_bounce_on_wall(True)
    info.change_score_by(-1)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_event_pressed2)

def on_overlap4(sprite, otherSprite):
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
sprites.on_overlap(SpriteKind.ms2, SpriteKind.enemy, on_overlap4)

def on_update_interval():
    enemy = sprites.create(assets.image("""enemy"""), SpriteKind.enemy)
    enemy.set_position(randint(0,160), randint(0,120))
    enemy.follow(my_sprite, 20)
game.on_update_interval(10000, on_update_interval)

def on_update_interval2():
    spr = sprites.create(assets.image("""plate"""), SpriteKind.z)
    spr.set_position(randint(0,160), randint(0,120))
    spr.set_scale(.5, ScaleAnchor.MIDDLE) 
game.on_update_interval(5000, on_update_interval2)

