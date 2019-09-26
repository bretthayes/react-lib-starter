module.exports = [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader'
    }
  },

  // Include and process css modules
  {
    test: /\.s?css$/,
    use: [
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          modules: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [
            require('autoprefixer')
          ]
        }
      },
      {
        loader: 'sass-loader'
      }
    ],
    include: /\.module\.s?css$/
  },

  // Exclude and don't process non css modules
  {
    test: /\.s?css$/,
    use: [
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          modules: false
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [
            require('autoprefixer')
          ]
        }
      },
      {
        loader: 'sass-loader'
      }
    ],
    exclude: /\.module\.s?css$/
  },

  {
    test: /\.(png|jpg|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },

  {
    test: /\.svg$/,
    loader: 'svg-inline-loader'
  },

  {
    test: /\.(png|jpe?g|gif|woff2?|ttf|eot)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      },
    ],
  }
];
