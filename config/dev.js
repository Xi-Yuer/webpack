const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        clean: true,
        path: path.resolve(__dirname, '../build'),
        filename: 'bundle.js',
        // 静态资源(图片)打包出口路径以及文件名
        assetModuleFilename: 'img/[name][hash:4][ext]',
    },
    module: {
        rules: [
            // 处理css文件
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    // 以下配置可以单独抽离到postcss.config.js 文件中
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 "postcss-preset-env"
                    //             ]
                    //         }
                    //     }
                    // }
                ]
            },
            // 处理less文件
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            // 处理图片文件
            {
                test: /\.(png|jpe?g|gif)$/,
                // 内置图片加载器（解析图片、字体、图标等）
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        // base64转化规则，小于该大小的图片转化为base64
                        maxSize: 4 * 1024 // 4KB
                    }
                }
            },
            // 处理js文件（js压缩，es6 => es5）
            {
                test: /\.js$/,
                use: ["babel-loader"]
                // 以下配置也可以写在babel.config.js中
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         presets: ['@babel/preset-env']
                //     }
                // }

            },
            // 处理.vue文件
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new VueLoaderPlugin(),
        // 每次打包自动删除 Build文件夹
        new CleanWebpackPlugin(),
        new DefinePlugin({
            // 定义全局变量
            "BASIC_URL": "'./'"
        })
    ],
    // 开发/生产模式
    mode: "development",
    // 热模块更新 执行脚本："serve": "webpack serve --open"
    devServer: {
        // (默认为true)
        hot: true
    },
    resolve: {
        // 路径别名
        alias: {
            "@": path.resolve(__dirname, '../src'),
        },
        // 导入模块时不需要带后缀
        extensions: ['.js', '.vue', '.json', '.jsx', '.ts', '.tsx'],
    }
}