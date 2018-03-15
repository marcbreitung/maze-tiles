# Maze Tiles

[![Build Status](https://travis-ci.org/marcbreitung/maze-tiles.svg?branch=master)](https://travis-ci.org/marcbreitung/maze-tiles) [![Coverage Status](https://coveralls.io/repos/github/marcbreitung/maze-tiles/badge.svg?branch=master)](https://coveralls.io/github/marcbreitung/maze-tiles?branch=master)

## Tile

```javascript
var tileOptions = {'x': 1, 'y': 1, 'bit': MazeTiles.BitField.getBitField(0, 1, 0, 1, 1, 1, 0, 1, 0)};
var tile = new MazeTiles.Tile(tileOptions);
```

## Tiles

```javascript
var tilesOptions = {'width': 3, 'height': 3};
var tiles = new MazeTiles.Tiles(tilesOptions);
tiles.add(new MazeTiles.Tile(tileOptions));
```

## Bit Field

The bit field defines the walkable parts of a tile.   

The plain tile.

![Tile](assets/tile_b_plain.png) 
![Tile](assets/tile_a_plain.png) 


1 represents a part where it is possible to walk and 0 where it isn't possible to walk.

![Tile](assets/tile_b_numbers.png)
![Tile](assets/tile_a_numbers.png)

Build the bit field with ``BitField.getBitField()``

```javascript
var bitFieldA = MazeTiles.BitField.getBitField(0, 1, 0, 0, 1, 1, 0, 0, 0);
var bitFieldB = MazeTiles.BitField.getBitField(0, 0, 0, 1, 1, 1, 0, 0, 0);
```