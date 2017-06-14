module.exports = {
    plugins: {
        'postcss-smart-import': {},
        //'precss':{/* ...options */},

        'autoprefixer': {},
'postcss-mixins':{}, // это не тестировал!

        //  испольвание нового синтаксиса в css        http://cssnext.io/
          'cssnext': {/* ...options */},
        //  проверка синтаксиса, оптимизация  и т.д.   http://cssnano.co/
        // 'cssnano': {/* ...options */},
    }

};