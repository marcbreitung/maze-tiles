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
            let tile = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tiles = new Tiles({});
            tiles.add(tile);
            assert.deepPropertyVal(tiles, 'tiles', {'tile-1-1': tile});
        });
    });
    suite('#hasConnection(tile)', function () {
        test('should return true if connection on the right exists', function () {
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tile_1_2 = new Tile({'row': 1, 'column': 2, 'walkable': [0, 0, 0, 1, 1, 1, 0, 0, 0]});
            assert.isTrue(Tiles.hasConnection(tile_1_2, tile_1_1));
        });
        test('should return false if no connection on the right exists', function () {
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tile_1_2 = new Tile({'row': 1, 'column': 2, 'walkable': [0, 0, 0, 0, 1, 1, 0, 0, 0]});
            assert.isFalse(Tiles.hasConnection(tile_1_2, tile_1_1));
        });
        test('should return true if connection on the bottom exists', function () {
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tile_2_1 = new Tile({'row': 2, 'column': 1, 'walkable': [0, 1, 0, 0, 1, 0, 0, 1, 0]});
            assert.isTrue(Tiles.hasConnection(tile_2_1, tile_1_1));
        });
        test('should return true if no connection on the bottom exists', function () {
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tile_2_1 = new Tile({'row': 2, 'column': 1, 'walkable': [0, 0, 0, 0, 1, 0, 0, 1, 0]});
            assert.isFalse(Tiles.hasConnection(tile_2_1, tile_1_1));
        });
        test('should return true if connection on the left exists', function () {
            let tile_1_2 = new Tile({'row': 1, 'column': 2, 'walkable': [0, 0, 0, 1, 1, 1, 0, 0, 0]});
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            assert.isTrue(Tiles.hasConnection(tile_1_1, tile_1_2));
        });
        test('should return true if no connection on the left exists', function () {
            let tile_1_2 = new Tile({'row': 1, 'column': 2, 'walkable': [0, 0, 0, 1, 1, 1, 0, 0, 0]});
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 0, 1, 0, 0, 1, 0]});
            assert.isFalse(Tiles.hasConnection(tile_1_1, tile_1_2));
        });
        test('should return true if connection on the top exists', function () {
            let tile_2_1 = new Tile({'row': 2, 'column': 1, 'walkable': [0, 1, 0, 0, 1, 0, 0, 1, 0]});
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            assert.isTrue(Tiles.hasConnection(tile_1_1, tile_2_1));
        });
        test('should return true if no connection on the top exists', function () {
            let tile_2_1 = new Tile({'row': 2, 'column': 1, 'walkable': [0, 1, 0, 0, 1, 0, 0, 1, 0]});
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 0, 0]});
            assert.isFalse(Tiles.hasConnection(tile_1_1, tile_2_1));
        });
        test('should return false tiles are not neighbours', function () {
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tile_1_3 = new Tile({'row': 1, 'column': 3, 'walkable': [0, 0, 0, 0, 1, 1, 0, 0, 0]});
            assert.isFalse(Tiles.hasConnection(tile_1_3, tile_1_1));
        });
    });
});