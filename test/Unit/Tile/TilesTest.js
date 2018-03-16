import {BitField} from "../../../src/BitField/BitField";

let assert = require('chai').assert;

import {Tile} from './../../../src/Tile/Tile';
import {Tiles} from "../../../src/Tile/Tiles";

suite('Tiles', function () {
    suite('#constructor(parameters)', function () {
        test('should set width, height and tiles with default values', function () {
            let tiles = new Tiles({});
            assert.propertyVal(tiles, 'width', 3);
            assert.propertyVal(tiles, 'height', 3);
            assert.deepPropertyVal(tiles, 'tiles', {});
        });
        test('should set width, height and tiles with parameter values', function () {
            let tiles = new Tiles({'width': 5, 'height': 5});
            assert.propertyVal(tiles, 'width', 5);
            assert.propertyVal(tiles, 'height', 5);
            assert.deepPropertyVal(tiles, 'tiles', {});
        });
    });
    suite('#add(tile)', function () {
        test('should add tile to attribute tiles', function () {
            let tile = new Tile({'x': 1, 'y': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tiles = new Tiles({});
            tiles.add(tile);
            assert.deepPropertyVal(tiles, 'tiles', {'tile-1-1': tile});
        });
    });
});