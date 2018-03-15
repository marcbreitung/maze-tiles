export class Tile {
    constructor(parameters) {
        this.x = parameters.x || 0;
        this.y = parameters.y || 0;
        this.bitmask = parameters.bitmask || 0;
        this.neighbours = [];
    }
}