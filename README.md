# Maze Tiles

[![Build Status](https://travis-ci.org/marcbreitung/maze-tiles.svg?branch=master)](https://travis-ci.org/marcbreitung/maze-tiles) [![Coverage Status](https://coveralls.io/repos/github/marcbreitung/maze-tiles/badge.svg?branch=master)](https://coveralls.io/github/marcbreitung/maze-tiles?branch=master)

Build a graph based on tiles. A tile is represented by 1 for walkable parts and 0 for not walkable parts.

![Tile](assets/tile_b_plain.png) 
![Tile](assets/tile_a_plain.png) 


![Tile](assets/tile_b_numbers.png)
![Tile](assets/tile_a_numbers.png)

## Tile

A single tile.

```javascript
var tileOptions = {'row': 1, 'column': 1, 'walkable': [0, 1, 0, 1, 1, 1, 0, 1, 0]};
var tile = new MazeTiles.Tile(tileOptions);
```

## Tiles

Tiles list. Calculates a graph based on the walkable parts defined in a tile.

```javascript
var tilesOptions = {'width': 3, 'height': 3};
var tiles = new MazeTiles.Tiles(tilesOptions);
tiles.addTile(new MazeTiles.Tile(tileOptions));
```

Gets the result as object with all calculated neighbours
```javascript
let tiles = new MazeTiles.Tiles({});
let tilesToTest = [
    new MazeTiles.Tile({'row': 1, 'column': 1, 'walkable': [0, 1, 0, 0, 1, 1, 0, 0, 0]}),
    new MazeTiles.Tile({'row': 1, 'column': 2, 'walkable': [0, 0, 0, 1, 1, 0, 0, 1, 0]}),
    new MazeTiles.Tile({'row': 1, 'column': 3, 'walkable': [0, 0, 0, 0, 0, 0, 0, 0, 0]}),

    new MazeTiles.Tile({'row': 2, 'column': 1, 'walkable': [0, 0, 0, 0, 0, 0, 0, 0, 0]}),
    new MazeTiles.Tile({'row': 2, 'column': 2, 'walkable': [0, 1, 0, 0, 1, 0, 0, 1, 0]}),
    new MazeTiles.Tile({'row': 2, 'column': 3, 'walkable': [0, 0, 0, 0, 0, 0, 0, 0, 0]}),

    new MazeTiles.Tile({'row': 3, 'column': 1, 'walkable': [0, 0, 0, 0, 0, 0, 0, 0, 0]}),
    new MazeTiles.Tile({'row': 3, 'column': 2, 'walkable': [0, 1, 0, 0, 1, 1, 0, 0, 0]}),
    new MazeTiles.Tile({'row': 3, 'column': 3, 'walkable': [0, 0, 0, 1, 1, 1, 0, 0, 0]})
];
tiles.addTiles(tilesToTest);
let result = tiles.result();
```

## Bit Field
```javascript
var bitFieldA = MazeTiles.BitField.getBitField(0, 1, 0, 0, 1, 1, 0, 0, 0);
var bitFieldB = MazeTiles.BitField.getBitField(0, 0, 0, 1, 1, 1, 0, 0, 0);
```