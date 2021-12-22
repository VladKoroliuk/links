import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export default {
    mode: "development",
    entry: {
        main: './app.js',
        login: './src/pages/login.js',
        signup: './src/pages/signup.js'
    },
    output: {
        path: path.resolve(path.resolve(), 'dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: false
    },
}