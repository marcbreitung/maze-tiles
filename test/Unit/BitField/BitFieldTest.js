import {Tile} from "../../../src/Tile/Tile";

let assert = require('chai').assert;

import {BitField} from "../../../src/BitField/BitField";

suite('getBitField', function () {
    suite('getBitField()', function () {
        test('should return arguments bit field', function () {
            assert.equal(7, BitField.getBitField(0, 0, 0, 0, 0, 0, 1, 1, 1));
            assert.equal(292, BitField.getBitField(1, 0, 0, 1, 0, 0, 1, 0, 0));
        });
    });
    suite('#hasConnection(tile)', function () {
        test('should return true if connection on the right exists', function () {
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tile_1_2 = new Tile({'row': 1, 'column': 2, 'walkable': [0, 0, 0, 1, 1, 1, 0, 0, 0]});
            assert.isTrue(BitField.hasConnection(tile_1_2, tile_1_1));
        });
        test('should return false if no connection on the right exists', function () {
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tile_1_2 = new Tile({'row': 1, 'column': 2, 'walkable': [0, 0, 0, 0, 1, 1, 0, 0, 0]});
            assert.isFalse(BitField.hasConnection(tile_1_2, tile_1_1));
        });
        test('should return true if connection on the bottom exists', function () {
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tile_2_1 = new Tile({'row': 2, 'column': 1, 'walkable': [0, 1, 0, 0, 1, 0, 0, 1, 0]});
            assert.isTrue(BitField.hasConnection(tile_2_1, tile_1_1));
        });
        test('should return true if no connection on the bottom exists', function () {
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tile_2_1 = new Tile({'row': 2, 'column': 1, 'walkable': [0, 0, 0, 0, 1, 0, 0, 1, 0]});
            assert.isFalse(BitField.hasConnection(tile_2_1, tile_1_1));
        });
        test('should return true if connection on the left exists', function () {
            let tile_1_2 = new Tile({'row': 1, 'column': 2, 'walkable': [0, 0, 0, 1, 1, 1, 0, 0, 0]});
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            assert.isTrue(BitField.hasConnection(tile_1_1, tile_1_2));
        });
        test('should return true if no connection on the left exists', function () {
            let tile_1_2 = new Tile({'row': 1, 'column': 2, 'walkable': [0, 0, 0, 1, 1, 1, 0, 0, 0]});
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 0, 1, 0, 0, 1, 0]});
            assert.isFalse(BitField.hasConnection(tile_1_1, tile_1_2));
        });
        test('should return true if connection on the top exists', function () {
            let tile_2_1 = new Tile({'row': 2, 'column': 1, 'walkable': [0, 1, 0, 0, 1, 0, 0, 1, 0]});
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            assert.isTrue(BitField.hasConnection(tile_1_1, tile_2_1));
        });
        test('should return true if no connection on the top exists', function () {
            let tile_2_1 = new Tile({'row': 2, 'column': 1, 'walkable': [0, 1, 0, 0, 1, 0, 0, 1, 0]});
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 0, 0]});
            assert.isFalse(BitField.hasConnection(tile_1_1, tile_2_1));
        });
        test('should return false tiles are not neighbours', function () {
            let tile_1_1 = new Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]});
            let tile_1_3 = new Tile({'row': 1, 'column': 3, 'walkable': [0, 0, 0, 0, 1, 1, 0, 0, 0]});
            assert.isFalse(BitField.hasConnection(tile_1_3, tile_1_1));
        });
    });
});