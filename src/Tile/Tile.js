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
                let index_row = this.row + row;
                let index_column = this.column + column;
                if (`tile-${this.row}-${this.column}` !== `tile-${index_row}-${index_column}` && tiles.tiles[`tile-${index_row}-${index_column}`]) {
                    this.neighbours[`tile-${index_row}-${index_column}`] = tiles.tiles[`tile-${index_row}-${index_column}`];
                }
            })
        });
    }
}
