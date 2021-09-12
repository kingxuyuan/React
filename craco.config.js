module.exports = {
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