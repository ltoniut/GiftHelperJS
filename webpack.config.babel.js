import webpack from 'webpack';
import path from "path";

const port = 8080;

module.exports = {
  entry: './app.js',
  node: {
     fs: "empty",
     net: "empty"
  }
};
