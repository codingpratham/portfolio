module.exports = {
  webpackDevMiddleware: (config : any) => {
    config.watchOptions = {
      poll: 1000, 
      aggregateTimeout: 300,
    };
    return config;
  },
};
