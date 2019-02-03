module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      './*.spec.js'
    ],
    preprocessors: {
      './*.spec.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      devtool: 'source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /\.spec\.js$/,
            use: { loader: 'istanbul-instrumenter-loader' }
          }
        ]
      }
    },
    coverageIstanbulReporter: {
      reports: [
        'text-summary',
        'html'
      ],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [
      'PhantomJS',
      'ChromeHeadless'
    ],
    singleRun: true
  })
}