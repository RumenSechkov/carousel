import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

dotenv.config();
export default {
  entry: './src/index.ts',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'source-map',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(import.meta.dirname, 'dist'),
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  devServer: {
    port: '5000',
    static: {
      directory: path.join(import.meta.dirname, 'public'),
    },
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },
  resolve: {
    fallback: { os: false, path: false, crypto: false },
    alias: {
      '@api-calls': path.resolve(import.meta.dirname, 'src/api/calls'),
      '@api-client': path.resolve(import.meta.dirname, 'src/api/client'),
      '@dispatch': path.resolve(import.meta.dirname, 'src/state/dispatch'),
      '@state': path.resolve(import.meta.dirname, 'src/state/store'),
      '@helpers': path.resolve(import.meta.dirname, 'src/helpers'),
      '@layouts': path.resolve(import.meta.dirname, 'src/layouts'),
      '@pages': path.resolve(import.meta.dirname, 'src/pages'),
      '@atoms': path.resolve(import.meta.dirname, 'src/components/atoms'),
      '@molecules': path.resolve(import.meta.dirname, 'src/components/molecules'),
      '@organisms': path.resolve(import.meta.dirname, 'src/components/organisms'),
      '@assets': path.resolve(import.meta.dirname, 'src/assets'),
      '@types-api-calls/*': path.resolve(import.meta.dirname, 'src/api/calls/*/types'),
      '@types-reducers': path.resolve(import.meta.dirname, 'src/state/reducers/types'),
      '@types-reducers/*': path.resolve(import.meta.dirname, 'src/state/reducers/*/types'),
    },
  },
};
