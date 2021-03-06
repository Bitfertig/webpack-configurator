const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


const config = {
    //watch: true,
    /* watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 200, // after build
        poll: 1000 // every
    }, */
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            /* {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png'
                        }
                    }
                ]
            }, */
            /* {
                test: /\.svg$/,
                use: 'file-loader'
            }, */
            // Running Babel on JS files. https://www.thebasement.be/working-with-babel-7-and-webpack/
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
            },
            /* {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1 // 0 => no loaders (default); 1 => postcss-loader
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            }, */
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            /* {
                test: /\.(scss)$/,
                //exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'css',
                            name: '[name].min.css'
                        }
                    },
                    //{
                    //    loader: 'style-loader', // inject CSS to page
                    //},
                    {
						loader: 'extract-loader'
					},
                    {
                        loader: 'css-loader?-url', // translates CSS into CommonJS modules
                    },
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader' // compiles Sass to CSS
                    },
                    
                ]
            }, */
            {
                test: /.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            cache: false,
            template: './src/index.html',
            filename: '../index.html',
        }),
        new VueLoaderPlugin(),
    ]
};

module.exports = config;