/* nodejs equivalent of import  */
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

/*Export nodejs object */
module.exports = {
    mode: "production",
    /*This file will be entry point for webpack to look into typescript code */
    entry: './src/app.ts',
    /*Webpack will generate this filename in the provided dirname */
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'none',
    /*Here we define what webpack should do with the file it encounters */
    module: {
        /*which loader(s) to use if test(s) pass*/
        /*By default webpack only knows js, loaders allow webpack to process other types of files */
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    /*tell webpack which extensions to look for */
    resolve: {
        extensions: ['.ts', '.js']
    },
    /*applies to the production workflow */
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]


};


