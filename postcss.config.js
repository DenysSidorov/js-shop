module.exports = {
    plugins: {
        'postcss-import': {},
        // add prefixes for old and different browsers
        autoprefixer: {}
        //  new syntax in developming http://cssnext.io/
        // cssnext: {},
        // cssnext: postcssPresetEnv(),
        //  check syntax, optimization,  etc.   http://cssnano.co/

        // cssnano: {}
    }
};



// module.exports = {
//     plugins: {
//         'postcss-smart-import': {},
//         //'precss':{/* ...options */},
//         // 'autoprefixer': { browsers: ['> 1%', 'ie >= 8'],},
//         'autoprefixer': {},
//         // 'autoprefixer': { browsers: ['> 1%']},
//         'postcss-mixins':{}, // это не тестировал!
//
//         //  испольвание нового синтаксиса в css        http://cssnext.io/
//           'cssnext': {/* ...options */},
//         //  проверка синтаксиса, оптимизация  и т.д.   http://cssnano.co/
//         // 'cssnano': {/* ...options */},
//     }
//
// };
