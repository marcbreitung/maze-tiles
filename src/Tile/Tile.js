import {BitField} from "../BitField/BitField";

export class Tile {

    /**
     * Constructor for a Tile
     * @param {Object} parameters - The parameters.
     * @param {Number} parameters.row - The position in x direction (row).
     * @param {Number} parameters.column - The position in y direction (column).
     * @param {Array} parameters.walkable - The walkable parts of this tile.
     */
    constructor(parameters) {
        this.row = parameters.row || 0;
        this.column = parameters.column || 0;
        this.walkable = parameters.walkable || [];
        this.neighbours = {};
    }

    /**
     * Adds neighbours if a connection to a neighbour tile exists
     * @param {Tiles} tiles - the tiles object
     */
    updateNeighbours(tiles) {
        let directions = [-1, 0, 1];
        directions.forEach((row) => {
            directions.forEach((column) => {
                if (row === 0 || column === 0) {
                    this.addNeighbour(this.row + row, this.column + column, tiles);
                }
            })
        });
    }

    /**
     * Add existing neighbours
     * @param {Number} row
     * @param {Number} column
     * @param {Tiles} tiles
     */
    addNeighbour(row, column, tiles) {
        let id = `tile-${row}-${column}`;
        if (`tile-${this.row}-${this.column}` !== id && tiles.tiles[id] && this.hasConnection(tiles.tiles[id])) {
            this.neighbours[id] = tiles.tiles[id];
        }
    }

    /**
     * Checks if a connection exists between two tiles
     * @param {Tile} tile - The tile to test
     * @returns {boolean} - Returns true, if connection exists
     */
    hasConnection(tile) {
        // is right
        if (tile.row - this.row === 0 && tile.column - this.column === 1) {
            let thisTileBit = this.walkable.filter((e, i) => (i + 1) % 3 === 0);
            let tileTileBit = tile.walkable.filter((e, i) => (i + 1) % 3 === 1);
            if (BitField.getBitField(...thisTileBit) & BitField.getBitField(...tileTileBit)) {
                return true;
            }
        }
        // is bottom
        if (tile.row - this.row === 1 && tile.column - this.column === 0) {
            let thisTileBit = this.walkable.slice(6, this.walkable.length);
            let tileTileBit = tile.walkable.slice(0, 3);
            if (BitField.getBitField(...thisTileBit) & BitField.getBitField(...tileTileBit)) {
                return true;
            }
        }
        // is left
        if (tile.row - this.row === 0 && tile.column - this.column === -1) {
            let thisTileBit = this.walkable.filter((e, i) => (i + 1) % 3 === 1);
            let tileTileBit = tile.walkable.filter((e, i) => (i + 1) % 3 === 0);
            if (BitField.getBitField(...thisTileBit) & BitField.getBitField(...tileTileBit)) {
                return true;
            }
        }
        return false;
    }
}
