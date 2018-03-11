let assert = require('chai').assert;

import {Tile} from './../../../src/Tile/Tile';

suite('Tile', function () {
    suite('#constructor(parameters)', function () {
        test('should set x, y and bitmask with default values', function () {
            let tile = new Tile({});
            assert.propertyVal(tile, 'x', 0);
            assert.propertyVal(tile, 'y', 0);
            assert.propertyVal(tile, 'bitmask', 0);
        });
        test('should set x, y and bitmask with parameter values', function () {
            let tile = new Tile({'x': 10, 'y': 10, 'bitmask': 7});
            assert.propertyVal(tile, 'x', 10);
            assert.propertyVal(tile, 'y', 10);
            assert.propertyVal(tile, 'bitmask', 7);
        });
    });
});