const path = require('path');
const autoprefixer = require('autoprefixer');
const resolve = (dir) => path.resolve(__dirname, dir);
const WebpackBar = require('webpackbar');
// const postcssPxToViewport = require('postcss-px-to-viewport');

module.exports = {
    reactScriptsVersion: "react-scripts" /* (default value) */ ,
    style: {
        sass: {
            test: /\.s[ac]ss$/,
            loader: 'sass-loader',
            loaderOptions: {
                additionalData: `@import './src/assets/style/public.scss';` //设置公共scss
            }
        },
        postcss: {
            mode: "extends" /* (default value) */ || "file",
            plugins: [
                autoprefixer,
                // postcssPxToViewport({
                //     unitToConvert: 'px',
                //     viewportWidth: 1920,
                //     unitPrecision: 13,
                //     propList: ['*'],
                //     viewportUnit: 'vw',
                //     fontViewportUnit: 'vw',
                //     selectorBlackList: [],
                //     minPixelValue: 1,
                //     mediaQuery: false,
                //     replace: true,
                //     exclude: [],
                //     landscape: false,
                //     landscapeUnit: 'vw',
                //     landscapeWidth: 568
                // })
            ]
        }
    },
    //配置别名
    webpack: {
        alias: {
            '@': resolve('src')
        },
        plugins: [
            new WebpackBar({
                profile: true,
                name: 'webpack',
                color: 'green',
            }),
        ],
    },
    babel: {
        // presets: [
        //     ['@babel/preset-env'],
        //     ['@babel/preset-react']
        // ],
        plugins: [
            // AntDesign 按需加载
            [
                'import',
                {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: 'css',
                }
            ] // `style: true` 会加载 less 文件
            // [
            //     '@babel/plugin-proposal-decorators',
            //     {
            //         legacy: true,
            //     },
            // ], // 用来支持装饰器
            // [
            //     '@babel/plugin-transform-runtime',
            //     {
            //         useESModules: true,
            //         regenerator: true,
            //     },
            // ],
            // ['@babel/plugin-proposal-class-properties'],
        ],
        loaderOptions: {
            /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
        },
    },
}