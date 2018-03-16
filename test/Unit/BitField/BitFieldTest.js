let assert = require('chai').assert;

import {BitField} from "../../../src/BitField/BitField";

suite('getBitField', function () {
    suite('getBitField()', function () {
        test('should return arguments bit field', function () {
            assert.equal(7, BitField.getBitField(0, 0, 0, 0, 0, 0, 1, 1, 1));
            assert.equal(292, BitField.getBitField(1, 0, 0, 1, 0, 0, 1, 0, 0));
        });
    });
});