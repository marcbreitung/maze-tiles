export class Tiles {
    constructor(parameters) {
        this.width = parameters.width || 3;
        this.height = parameters.height || 3;
        this.tiles = {};
    }

    add(tile) {
        this.tiles[`${tile.x}-${tile.y}`] = tile;
    }
}