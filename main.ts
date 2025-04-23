namespace SpriteKind {
    export const Player1 = SpriteKind.create()
    export const Player2 = SpriteKind.create()
    export const Rune1 = SpriteKind.create()
    export const Rune2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player2, sprites.dungeon.stairLadder, function (sprite, location) {
    info.player2.changeScoreBy(1)
    music.stopAllSounds()
    Level3()
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Player_1)
    animation.runImageAnimation(
    Player_1,
    assets.animation`Idle`,
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player1, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    info.player1.changeScoreBy(1)
    music.stopAllSounds()
    Level4()
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (Player_1.isHittingTile(CollisionDirection.Bottom)) {
        Player_1.vy += -90
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    }
})
function FinalLevel () {
    game.splash("Runes & Tunes", "Final Level")
    scene.setBackgroundColor(9)
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnTile(Player_2, tiles.getTileLocation(1, 6))
    tiles.placeOnTile(Player_1, tiles.getTileLocation(0, 6))
}
function Level2 () {
    game.splash("Runes & Tunes", "Level 2")
    scene.setBackgroundColor(11)
    tiles.setCurrentTilemap(tilemap`level10`)
    tiles.placeOnTile(Player_2, tiles.getTileLocation(2, 2))
    tiles.placeOnTile(Player_1, tiles.getTileLocation(1, 2))
    music.play(music.createSong(hex`0028000408020303001c0001dc00690000045e01000400000000000000000000056400010400033c0000000400012504000800012908000c00012210001400012518001c00012920002400012528002c00012530003400012438003c0001223c004000011e06001c00010a006400f401640000040000000000000000000000000000000002360000000400012008000c00011e10001400012218001c00012520002400012228002c00012230003400012038003c00011e3c004000011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003700000001000102080009000102100011000202071800190001022000210001022800290001023000310001023800390001023c003d000101`), music.PlaybackMode.InBackground)
}
scene.onOverlapTile(SpriteKind.Player1, assets.tile`myTile`, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(5, 21), false)
    tiles.setWallAt(tiles.getTileLocation(5, 20), false)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
function Level3 () {
    game.splash("Runes & Tunes", "Level 3")
    scene.setBackgroundColor(12)
    tiles.setCurrentTilemap(tilemap`level12`)
    tiles.placeOnTile(Player_2, tiles.getTileLocation(2, 8))
    tiles.placeOnTile(Player_1, tiles.getTileLocation(1, 8))
    music.play(music.createSong(hex`0028000408020303001c0001dc00690000045e01000400000000000000000000056400010400033c0000000400012504000800012908000c00012210001400012518001c00012920002400012528002c00012530003400012438003c0001223c004000011e06001c00010a006400f401640000040000000000000000000000000000000002360000000400012008000c00011e10001400012218001c00012520002400012228002c00012230003400012038003c00011e3c004000011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003700000001000102080009000102100011000202071800190001022000210001022800290001023000310001023800390001023c003d000101`), music.PlaybackMode.InBackground)
}
function Players () {
    Player_1 = sprites.create(assets.image`Robert`, SpriteKind.Player1)
    controller.moveSprite(Player_1, 50, 0)
    MakeyMakey.setSimulatorKeymap(
    MakeyMakey.PlayerNumber.ONE,
    MakeyMakey.MakeyMakeyKey.UP,
    MakeyMakey.MakeyMakeyKey.DOWN,
    MakeyMakey.MakeyMakeyKey.LEFT,
    MakeyMakey.MakeyMakeyKey.RIGHT,
    MakeyMakey.MakeyMakeyKey.SPACE,
    MakeyMakey.MakeyMakeyKey.LEFT_CLICK
    )
    MakeyMakey.setSimulatorKeymap(
    MakeyMakey.PlayerNumber.TWO,
    MakeyMakey.MakeyMakeyKey.W,
    MakeyMakey.MakeyMakeyKey.S,
    MakeyMakey.MakeyMakeyKey.A,
    MakeyMakey.MakeyMakeyKey.D,
    MakeyMakey.MakeyMakeyKey.F,
    MakeyMakey.MakeyMakeyKey.G
    )
}
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Player_2)
    animation.runImageAnimation(
    Player_2,
    assets.animation`Idle2`,
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player1, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.player1.changeScoreBy(1)
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player2, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.player2.changeScoreBy(1)
    music.stopAllSounds()
    Level1()
})
sprites.onOverlap(SpriteKind.Player1, SpriteKind.Rune2, function (sprite, otherSprite) {
    sprites.destroy(Rune2)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player2, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.player2.changeScoreBy(1)
    game.gameOver(true)
})
function Level1 () {
    game.splash("Runes & Tunes", "Level 1")
    scene.setBackgroundColor(9)
    tiles.setCurrentTilemap(tilemap`level8`)
    tiles.placeOnTile(Player_2, tiles.getTileLocation(1, 1))
    tiles.placeOnTile(Player_1, tiles.getTileLocation(0, 1))
    music.play(music.createSong(hex`0028000408020303001c0001dc00690000045e01000400000000000000000000056400010400033c0000000400012504000800012908000c00012210001400012518001c00012920002400012528002c00012530003400012438003c0001223c004000011e06001c00010a006400f401640000040000000000000000000000000000000002360000000400012008000c00011e10001400012218001c00012520002400012228002c00012230003400012038003c00011e3c004000011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003700000001000102080009000102100011000202071800190001022000210001022800290001023000310001023800390001023c003d000101`), music.PlaybackMode.InBackground)
}
scene.onOverlapTile(SpriteKind.Player2, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    info.player2.changeScoreBy(1)
    music.stopAllSounds()
    Level2()
})
scene.onOverlapTile(SpriteKind.Player1, assets.tile`myTile0`, function (sprite, location) {
    info.player1.changeScoreBy(1)
    music.stopAllSounds()
    FinalLevel()
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (Player_2.isHittingTile(CollisionDirection.Bottom)) {
        Player_2.vy += -90
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_2,
    assets.animation`Right2`,
    50,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player2, assets.tile`Lever`, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(15, 21), false)
    tiles.setWallAt(tiles.getTileLocation(15, 20), false)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Rune1, function (sprite, otherSprite) {
    sprites.destroy(Rune1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player1, SpriteKind.Rune1, function (sprite, otherSprite) {
    sprites.destroy(Rune1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player1, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    info.player1.changeScoreBy(1)
    music.stopAllSounds()
    Level2()
})
scene.onOverlapTile(SpriteKind.Player2, sprites.builtin.forestTiles10, function (sprite, location) {
    sprites.destroy(Player_2)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
    game.gameOver(false)
    game.reset()
    music.stopAllSounds()
    game.setGameOverMessage(false, ":(")
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_2,
    assets.animation`LeftP`,
    50,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player1, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(13, 8), false)
    tiles.setWallAt(tiles.getTileLocation(14, 8), false)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_1,
    assets.animation`RightRobert`,
    50,
    true
    )
})
function Tutorial () {
    scene.setBackgroundColor(7)
    tiles.setCurrentTilemap(tilemap`level2`)
    game.showLongText("Hey! Listen! Collect the most points to win!", DialogLayout.Bottom)
    game.showLongText("But don't be too hasty! one foul fall and BOTH of you will fail!", DialogLayout.Bottom)
    game.showLongText("Oh! And try to stay close!", DialogLayout.Bottom)
}
function Level4 () {
    game.splash("Runes & Tunes", "Level 4")
    scene.setBackgroundColor(12)
    tiles.setCurrentTilemap(tilemap`level16`)
    tiles.placeOnTile(Player_2, tiles.getTileLocation(2, 28))
    tiles.placeOnTile(Player_1, tiles.getTileLocation(1, 28))
    Rune1 = sprites.create(assets.image`Rune1`, SpriteKind.Rune1)
    tiles.placeOnTile(Rune1, tiles.getTileLocation(2, 11))
    Rune2 = sprites.create(assets.image`Rune2`, SpriteKind.Rune2)
    tiles.placeOnTile(Rune2, tiles.getTileLocation(1, 21))
    music.play(music.createSong(hex`0028000408020303001c0001dc00690000045e01000400000000000000000000056400010400033c0000000400012504000800012908000c00012210001400012518001c00012920002400012528002c00012530003400012438003c0001223c004000011e06001c00010a006400f401640000040000000000000000000000000000000002360000000400012008000c00011e10001400012218001c00012520002400012228002c00012230003400012038003c00011e3c004000011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003700000001000102080009000102100011000202071800190001022000210001022800290001023000310001023800390001023c003d000101`), music.PlaybackMode.InBackground)
}
scene.onOverlapTile(SpriteKind.Player1, sprites.dungeon.stairLadder, function (sprite, location) {
    info.player1.changeScoreBy(1)
    music.stopAllSounds()
    Level3()
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Player_2)
    animation.runImageAnimation(
    Player_2,
    assets.animation`Idle2`,
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player1, sprites.builtin.forestTiles10, function (sprite, location) {
    sprites.destroy(Player_1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
    game.gameOver(false)
    game.reset()
    music.stopAllSounds()
    game.setGameOverMessage(false, ":(")
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    Player_2 = sprites.create(assets.image`Goobert`, SpriteKind.Player2)
    controller.player2.moveSprite(Player_2, 50, 0)
    tiles.placeOnTile(Player_2, tiles.getTileLocation(2, 5))
    Player_2.ay = 100
})
scene.onOverlapTile(SpriteKind.Player2, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(13, 8), false)
    tiles.setWallAt(tiles.getTileLocation(14, 8), false)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Player_1)
    animation.runImageAnimation(
    Player_1,
    assets.animation`Idle`,
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player1, assets.tile`Lever`, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(15, 21), false)
    tiles.setWallAt(tiles.getTileLocation(15, 20), false)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player2, assets.tile`myTile0`, function (sprite, location) {
    music.stopAllSounds()
    info.player2.changeScoreBy(1)
    FinalLevel()
})
scene.onOverlapTile(SpriteKind.Player2, assets.tile`myTile`, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(5, 21), false)
    tiles.setWallAt(tiles.getTileLocation(5, 20), false)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player1, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.player1.changeScoreBy(1)
    music.stopAllSounds()
    Level1()
})
scene.onOverlapTile(SpriteKind.Player2, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    info.player2.changeScoreBy(1)
    music.stopAllSounds()
    Level4()
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Rune2, function (sprite, otherSprite) {
    sprites.destroy(Rune2)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_1,
    assets.animation`Left`,
    50,
    true
    )
})
let Rune1: Sprite = null
let Rune2: Sprite = null
let Player_2: Sprite = null
let Player_1: Sprite = null
game.splash("Runes & Tunes", "Tutorial")
Tutorial()
Players()
tiles.placeOnTile(Player_1, tiles.getTileLocation(1, 5))
Player_1.ay = 100
scene.cameraFollowSprite(Player_1)
music.play(music.createSong(hex`0028000408020303001c0001dc00690000045e01000400000000000000000000056400010400033c0000000400012504000800012908000c00012210001400012518001c00012920002400012528002c00012530003400012438003c0001223c004000011e06001c00010a006400f401640000040000000000000000000000000000000002360000000400012008000c00011e10001400012218001c00012520002400012228002c00012230003400012038003c00011e3c004000011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003700000001000102080009000102100011000202071800190001022000210001022800290001023000310001023800390001023c003d000101`), music.PlaybackMode.InBackground)
