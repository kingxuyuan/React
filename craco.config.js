const autoprefixer = require('autoprefixer');
const postcssViewport = require('postcss-px-to-viewport');
module.exports = {
    reactScriptsVersion: "react-scripts" /* (default value) */ ,
    style: {
        sass: {
            test: /^s[ac]ss$/i,
            loader: 'sass-loader',
            loaderOptions: {
                additionalData: `@import "./src/assets/style/public.scss";`
            }
        },
        postcss: {
            mode: "extends" /* (default value) */ || "file",
            plugins: [
                autoprefixer(),
                // postcssViewport({
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
                //     exclude: undefined,
                //     include: undefined,
                //     landscape: false,
                //     landscapeUnit: 'vw',
                //     landscapeWidth: 568
                // })
            ]
        }
    },
    babel: {
        plugins: [
            [
                'import',
                {
                    libraryName: 'antd',
                    libraryDirectory: "lib", // default: lib
                    style: 'css',
                },
            ]
        ]
    }
};