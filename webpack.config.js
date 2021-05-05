const path = require('path');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
   },
   module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // 3. Style nodes
            "style-loader",
            // 2. CSS - CommonJS
            "css-loader", 
            // 1. SCSS -> CSS
            "sass-loader",
         ],
        },
      ],
    },
}