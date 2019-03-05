const path = require('path');

module.exports = [
    {
        mode: 'production',
        entry: './src/maze-tiles.js',
        output: {
            filename: 'maze-tiles.min.js',
            path: path.resolve(__dirname, 'dist'),
            library: 'MazeTiles'
        },
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.js$/,
                    include: [path.resolve(__dirname, 'src')],
                    exclude: [path.resolve(__dirname, 'node_modules')],
                    loader: "eslint-loader",
                },
                {
                    test: /\.js$/,
                    include: [path.resolve(__dirname, 'src')],
                    exclude: [path.resolve(__dirname, 'node_modules')],
                    loader: "babel-loader",
                },
            ]
        }
    },
    {
        mode: 'production',
        entry: './src/maze-tiles.js',
        output: {
            filename: 'maze-tiles.node.min.js',
            path: path.resolve(__dirname, 'dist'),
            libraryTarget: 'commonjs'
        },
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.js$/,
                    include: [path.resolve(__dirname, 'src')],
                    exclude: [path.resolve(__dirname, 'node_modules')],
                    loader: "eslint-loader",
                },
                {
                    test: /\.js$/,
                    include: [path.resolve(__dirname, 'src')],
                    exclude: [path.resolve(__dirname, 'node_modules')],
                    loader: "babel-loader",
                },
            ]
        }
    }];