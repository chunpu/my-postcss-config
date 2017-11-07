// https://github.com/michael-ciniawsky/postcss-load-config
// postcss.config.js .postcssrc.js 都可以

module.exports = {
  "plugins": [
    // to edit target browsers: use "browserslist" field in package.json
    require('postcss-salad')(),
    // https://github.com/ai/browserslist#queries
    // >= 0% 就是全部
    require('autoprefixer')({browsers: ['last 2 versions', 'ie 6-11', '>= 0%', 'Firefox > 100']})
  ]
}

