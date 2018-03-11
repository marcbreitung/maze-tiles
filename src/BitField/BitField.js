export class BitField {
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
