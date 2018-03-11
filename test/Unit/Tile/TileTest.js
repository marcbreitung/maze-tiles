let assert = require('chai').assert;

import {Tile} from './../../../src/Tile/Tile';

suite('Tile', function () {
    suite('#constructor(name)', function () {
        test('should set name attribute', function () {
            let tile = new Tile('The name');
            assert.propertyVal(tile, 'name', 'The name');
        });
    });
});