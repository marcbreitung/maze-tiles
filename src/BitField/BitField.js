/**
 * Static functions to handle bit field operations
 */
export class BitField {

    /**
     * Returns the arguments as bit field.
     * @param {...number} - zero or more fields.
     * @returns {number} value - the bit field.
     */
    static getBitField() {
        const numbers = Array.from(arguments).reverse();

        let value = 0,
            index = 1,
            length = numbers.length;

        for (let i = 0; i < length; i++) {
            if (numbers[i] === 1) {
                value += index;
            }
            index *= 2;
        }

        return value;
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
