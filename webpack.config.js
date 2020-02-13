const path = require('path');

const plugin_folder = 'Vue-Socket.io/src/index.js'
const plugin = {
    entry: path.join(__dirname, `plugins/${plugin_folder}`),
    output: path.join(__dirname, `plugins/plugins/Vue-Socket.io/dist`),
}

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: plugin.entry,
    output: {
        filename: 'index.js',
        path: plugin.output,
        // libraryTarget: 'amd'
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "module:@babel/plugin-proposal-class-properties",
                            "module:@babel/plugin-transform-classes"]
                        
                    }
                }
            }
        ]
    },
    node: {
        fs: 'empty',
        module: 'empty',
        net: 'empty'
    }
}