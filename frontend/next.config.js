module.exports = {
    "noImplicitAny": false,
    entry: "./index.js",
    mode: "development",
    images: {
        domains: ['drive.google.com', 'googleusercontent.com'],
      },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.node = {
            fs: 'empty',
            tls: 'empty',
            net: 'empty',
            child_process: 'empty'
          }
        }
    
        return config
      },
    module: {
          rules: [{
              test: /\.md$/,
              use: [
                  {
                      loader: "html-loader"
                  },
                  {
                      loader: "markdown-loader",
                      // optional options
                      /*
                      options: {
                          renderer
                      }
                      */
                  }
              ]
          }]
      },
      output: {
          filename: "bundle.js"
      },
  };
