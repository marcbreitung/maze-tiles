import {BitField} from "../../../src/BitField/BitField";

let assert = require('chai').assert;

import {Tile} from './../../../src/Tile/Tile';
import {Tiles} from "../../../src/Tile/Tiles";

suite('Tile', function () {
    suite('#constructor(parameters)', function () {
        test('should set x, y and bitmask with default values', function () {
            let tile = new Tile({});
            assert.propertyVal(tile, 'x', 0);
            assert.propertyVal(tile, 'y', 0);
            assert.propertyVal(tile, 'bit', 0);
            assert.deepPropertyVal(tile, 'neighbours', {});
        });
        test('should set x, y and bitmask with parameter values', function () {
            let tile = new Tile({'x': 10, 'y': 10, 'bit': 7});
            assert.propertyVal(tile, 'x', 10);
            assert.propertyVal(tile, 'y', 10);
            assert.propertyVal(tile, 'bit', 7);
        });
    });
    suite('updateNeighbours(tiles)', function () {
        test('should update the tile neighbours', function () {
            let tile_1_1 = new Tile({'x': 1, 'y': 1, 'bit': BitField.getBitField(0, 1, 0, 1, 1, 1, 0, 1, 0)});
            let tile_2_1 = new Tile({'x': 2, 'y': 1, 'bit': BitField.getBitField(0, 1, 0, 1, 1, 1, 0, 1, 0)});
            let tiles = new Tiles({});
            tiles.add(tile_1_1);
            tiles.add(tile_2_1);
            tile_1_1.updateNeighbours(tiles);
            assert.deepPropertyVal(tile_1_1, 'neighbours', {'tile-2-1': tile_2_1});
        });
    });
});