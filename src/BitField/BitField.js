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

}
