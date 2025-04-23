// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level8":
            case "level8":return tiles.createTilemap(hex`1400080000000000000000000000000000000000000000000000000000000000000000000000000000000000010100000100000000000100000000000000000001010101010000000001010100000000000000000101010100010101010000000101000000000000000000000001010100000000000101010100000000000000000000000000000000000001010100020000000000000000000000000000000000010101`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
2 2 . . 2 . . . . . 2 . . . . . . . . . 
2 2 2 2 2 . . . . 2 2 2 . . . . . . . . 
2 2 2 2 . 2 2 2 2 . . . 2 2 . . . . . . 
. . . . . 2 2 2 . . . . . 2 2 2 2 . . . 
. . . . . . . . . . . . . . . 2 2 2 . . 
. . . . . . . . . . . . . . . . . 2 2 2 
`, [myTiles.transparency16,myTiles.tile10,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`280008000000000000000000000606000000000000000000000000000000000606060000000000000000000000000000000000060606060600000000000606060606000000000000060606000000000000001300000000000000000000000000000000000006060606000000000000000000000000000000000011000000000000000000000000000000000000000000000000000000000000000000000000000002020200000000000000000000000000000000000000000000000000000000000000000008080012050203000000000000000003070500000000000000000000000000000000000000030000020800070307030000000000000003070403000000000000090d000000000d0e00000000020504000802001007070501010101010101010101010101010101010c0b0a0a0a0a0b0f010101010101010a01010a01010101`, img`
........................................
........................................
......................................2.
.....................................222
.................................22.2222
........222...................2..22.2222
.......2222......22....22....222.22.2222
2222222222222222222....222222222.22.2222
`, [myTiles.transparency16,myTiles.tile3,sprites.dungeon.floorLight4,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.floorMixed,myTiles.tile10,sprites.dungeon.floorDark0,sprites.dungeon.floorLightMoss,sprites.builtin.forestTiles1,sprites.builtin.forestTiles10,sprites.builtin.forestTiles6,sprites.builtin.forestTiles5,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles7,sprites.dungeon.floorDark3,sprites.dungeon.floorLight2,sprites.dungeon.floorDark5,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
            case "level12":
            case "level12":return tiles.createTilemap(hex`1e000a00050401010301020301010101020301010201010201010201010101020101030000000000000000020102010000000000000000000000000000000001030000000000000000000103010000000000000000000000000000000001030000000000000000000601000000000000000000000000000000000001030000000000000000000103000000000000000000000000000000000001030000000000000000000001000000010100000000000000000000000001030000000000000600000000030000010101000000000000000000000001030000000000030306000000000001010202010100000000000000000001030000000003030306000000000303030202030200000000000000000007010102020801010101080801010101030101010308080808010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . 2 . . . 2 2 . . . . . . . . . . . . 2 
2 . . . . . . 2 . . . . 2 . . 2 2 2 . . . . . . . . . . . 2 
2 . . . . . 2 2 2 . . . . . 2 2 2 2 2 2 . . . . . . . . . 2 
2 . . . . 2 2 2 2 . . . . 2 2 2 2 2 2 2 . . . . . . . . . . 
2 2 2 2 . 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.floorMixed,sprites.dungeon.floorDark3,sprites.dungeon.floorDark5,sprites.dungeon.doorOpenNorth,sprites.builtin.forestTiles10], TileScale.Sixteen);
            case "level10":
            case "level10":return tiles.createTilemap(hex`10001000010106010101010601010106010101060100000000000000000000000000000606000000000000000000000000000001020201060106060101010100000000010100000000000000000000000000000101000000000007000007000000000009010000010107070101070701010901010100000000000000000000000000030101070707010606010606010101050509010001000200000606000600000000090200020001000000000000000600000102000000000002010206010601090901010000010202020000000000000000010100000000000000000000000000000101000000000000000000000000000a0101060601040401040401040401010801`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . 2 . . 2 . . . . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . 2 . . 2 2 . 2 . . . . 2 
2 . 2 . 2 . . . . . . . 2 . . 2 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 
2 . . 2 2 2 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 . . 2 . . 2 . . 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.chestClosed,sprites.builtin.forestTiles10,sprites.dungeon.floorMixed,sprites.dungeon.floorLight4,sprites.dungeon.floorLightMoss,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.stairLadder], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a0008000100000003000000000001000000020000000000010000000000000000000102020002020000000001000000000000000202010000000000000201010101010101010101010101010101010101010101`, img`
2 . . . . . . . . . 
2 . . . 2 . . . . . 
2 . . . . . . . . . 
2 2 2 . 2 2 . . . . 
2 . . . . . . . 2 2 
2 . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
            case "level16":
            case "level16":return tiles.createTilemap(hex`14001e00010101010101010101010101010101010101010101000000000101000000000000000000000000010100000000000100000000000000000000000001010000000000000001000000000000000000000101070000000000000101000000000000000000010101010101010101010101010101010000000101010000000000000000000000000000000000000101000000000000000000000000000001000000010100000000000000000100000000000000000001010000000000000000000000010000000000000101000000000100000100000000000000000000010100000000000000000000000000010000000001010601000000000000000000000000000000010101010100000000000000000001000000000101010101000000000001000000000000000000000101010000000000000000000100000000000000000101000000010000000000000000000000000000010100000000000001000000000000000000000001010000000000000000000000000000000000000101010101010101010101010101010101010000010100000000050000000000000000000500000001010000000005000000000000000000050001000101010101010100000000000000010101010101010100000000000000000001010100000000000001010000000000000001000000000000000000000101000000000001010101000000000000000300010102010101010101000000000000000001010101010000000000000000000101000000000101010101000000000000000001010101010001010101010101010101010101040101010101040101010101`, img`
22222222222222222222
2....22............2
2.....2............2
2.......2..........2
2.......22.........2
222222222222222...22
2..................2
2..............2...2
2........2.........2
2...........2......2
2....2..2..........2
2.............2....2
2.2...............22
222.........2....222
22.....2..........22
2.........2........2
2...2..............2
2......2...........2
2..................2
22222222222222222..2
2....2.........2...2
2....2.........2.2.2
222222.......2222222
2.........222......2
2.......2..........2
2.....2222.........2
22222222........2222
2.........22....2222
2........22222.22222
22222222.22222.22222
`, [myTiles.transparency16,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,myTiles.tile7,sprites.builtin.forestTiles10,myTiles.tile11,myTiles.tile12,myTiles.tile13], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Green":
            case "tile3":return tile3;
            case "Teal":
            case "tile5":return tile5;
            case "Yellow":
            case "tile2":return tile2;
            case "Orange":
            case "tile1":return tile1;
            case "Black":
            case "tile6":return tile6;
            case "Light Blue":
            case "tile8":return tile8;
            case "Purple":
            case "tile9":return tile9;
            case "White":
            case "tile10":return tile10;
            case "Light Purple":
            case "tile4":return tile4;
            case "Lever":
            case "tile7":return tile7;
            case "Lock":
            case "tile11":return tile11;
            case "myTile":
            case "tile12":return tile12;
            case "myTile0":
            case "tile13":return tile13;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
