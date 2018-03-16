import {BitField} from "../BitField/BitField";

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

    /**
     * Checks if a connection exists between two tiles
     * @param {Tile} tileA - The tileA to test
     * @param {Tile} tileB - The tileB to test
     * @returns {boolean} - Returns true, if connection exists
     */
    static hasConnection(tileA, tileB) {
        // is right
        if (tileA.row - tileB.row === 0 && tileA.column - tileB.column === 1) {
            let thisTileBit = tileB.walkable.filter((e, i) => (i + 1) % 3 === 0);
            let tileTileBit = tileA.walkable.filter((e, i) => (i + 1) % 3 === 1);
            if (BitField.getBitField(...thisTileBit) & BitField.getBitField(...tileTileBit)) {
                return true;
            }
        }
        // is bottom
        if (tileA.row - tileB.row === 1 && tileA.column - tileB.column === 0) {
            let thisTileBit = tileB.walkable.slice(6, tileB.walkable.length);
            let tileTileBit = tileA.walkable.slice(0, 3);
            if (BitField.getBitField(...thisTileBit) & BitField.getBitField(...tileTileBit)) {
                return true;
            }
        }
        // is left
        if (tileA.row - tileB.row === 0 && tileA.column - tileB.column === -1) {
            let thisTileBit = tileB.walkable.filter((e, i) => (i + 1) % 3 === 1);
            let tileTileBit = tileA.walkable.filter((e, i) => (i + 1) % 3 === 0);
            if (BitField.getBitField(...thisTileBit) & BitField.getBitField(...tileTileBit)) {
                return true;
            }
        }
        // is top
        if (tileA.row - tileB.row === -1 && tileA.column - tileB.column === 0) {
            let thisTileBit = tileB.walkable.slice(0, 3);
            let tileTileBit = tileA.walkable.slice(6, tileB.walkable.length);
            if (BitField.getBitField(...thisTileBit) & BitField.getBitField(...tileTileBit)) {
                return true;
            }
        }
        return false;
    }
}