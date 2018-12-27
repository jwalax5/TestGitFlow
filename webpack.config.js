const Dotenv = require('dotenv-webpack');

module.exports = {
  
  plugins: [
    new Dotenv({
        path: `./.env.${env === "production" ? "production" : "development"}`,
    })
  ]
};

export default config;  