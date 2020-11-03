// var postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: {
    'postcss-import': {},
    // add prefixes for old and different browsers
    autoprefixer: {},
    //  new syntax in developming http://cssnext.io/
    // cssnext: {},
    // cssnext: postcssPresetEnv(),
    //  check syntax, optimization,  etc.   http://cssnano.co/

    cssnano: {}
  }
};
