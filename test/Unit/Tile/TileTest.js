let assert = require('chai').assert;

import {Tile} from './../../../src/Tile/Tile';
import {Tiles} from "../../../src/Tile/Tiles";

suite('Tile', function () {
    suite('#constructor(parameters)', function () {
        test('should set row, column and walkable with default values', function () {
            let tile = new Tile({});
            assert.propertyVal(tile, 'row', 0);
            assert.propertyVal(tile, 'column', 0);
            assert.deepPropertyVal(tile, 'walkable', []);
            assert.deepPropertyVal(tile, 'neighbours', {});
        });
        test('should set row, column y and walkable with parameter values', function () {
            let tile = new Tile({'row': 10, 'column': 10, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            assert.propertyVal(tile, 'row', 10);
            assert.propertyVal(tile, 'column', 10);
            assert.deepPropertyVal(tile, 'walkable', [0, 1, 0, 1, 1, 1, 0, 1, 0]);
        });
    });
    suite('#updateNeighbours(tiles)', function () {
        test('should update the tile neighbours', function () {
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tile_1_2 = new Tile({'row': 1, 'column': 2, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tiles = new Tiles({});
            tiles.addTile(tile_1_1);
            tiles.addTile(tile_1_2);
            tile_1_1.updateNeighbours(tiles);
            assert.deepPropertyVal(tile_1_1, 'neighbours', {'tile12': tile_1_2});
        });
    });
    suite('#addNeighbour(row, column, tiles)', function () {
        test('should update the tile neighbours if two tiles have a connection', function () {
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tile_1_2 = new Tile({'row': 1, 'column': 2, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tiles = new Tiles({});
            tiles.addTile(tile_1_1);
            tiles.addTile(tile_1_2);
            tile_1_1.addNeighbour(1, 2, tiles);
            assert.deepPropertyVal(tile_1_1, 'neighbours', {'tile12': tile_1_2});
        });
        test('should not update the tile neighbours if two tiles have no connection', function () {
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tile_1_2 = new Tile({'row': 1, 'column': 2, 'walkable': [0, 1, 0, 0, 1, 1, 0, 1, 0]});
            let tiles = new Tiles({});
            tiles.addTile(tile_1_1);
            tiles.addTile(tile_1_2);
            tile_1_1.addNeighbour(1, 2, tiles);
            assert.deepPropertyVal(tile_1_1, 'neighbours', {});
        });
    });
});