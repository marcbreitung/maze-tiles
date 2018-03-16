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
        if (`tile-${this.row}-${this.column}` !== id && tiles.tiles[id]) {
            this.neighbours[id] = tiles.tiles[id];
        }
    }
}
