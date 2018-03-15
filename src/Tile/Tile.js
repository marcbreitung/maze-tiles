export class Tile {

    /**
     * Constructor for a Tile
     * @param {Object} parameters - The parameters.
     * @param {Number} parameters.x - The position in x direction (row).
     * @param {Number} parameters.y - The position in y direction (column).
     * @param {Number} parameters.bit - The bit field 1 for way 0 for no way.
     */
    constructor(parameters) {
        this.x = parameters.x || 0;
        this.y = parameters.y || 0;
        this.bit = parameters.bit || 0;
        this.neighbours = {};
    }

    /**
     * Adds neighbours if a connection to a neighbour tile exists
     * @param {Tiles} tiles - the tiles object
     */
    updateNeighbours(tiles) {
        let directions = [-1, 0, 1];
        directions.forEach((x) => {
            directions.forEach((y) => {
                let index_x = this.x + x;
                let index_y = this.y + y;
                if (`tile-${this.x}-${this.y}` !== `tile-${index_x}-${index_y}` && tiles.tiles[`tile-${index_x}-${index_y}`]) {
                    this.neighbours[`tile-${index_x}-${index_y}`] = tiles.tiles[`tile-${index_x}-${index_y}`];
                }
            })
        });
    }
}
