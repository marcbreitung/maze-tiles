export class Tiles {
    /**
     * Constructor for a Tiles
     * @param {Object} parameters - The parameters.
     * @param {Number} parameters.width - Width of a tile.
     * @param {Number} parameters.height - Height of a tile.
     */
    constructor(parameters) {
        this.width = parameters.width || 3;
        this.height = parameters.height || 3;
        this.tiles = {};
    }

    /**
     * Adds a tile
     * @param {Tile} tile - The tile to add.
     */
    add(tile) {
        this.tiles[`tile-${tile.row}-${tile.column}`] = tile;
    }
}