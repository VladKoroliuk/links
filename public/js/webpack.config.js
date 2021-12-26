import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export default {
    mode: "development",
    entry: {
        app: './app.js',
        login: './src/pages/login.js',
        signup: './src/pages/signup.js',
        main: './src/pages/main.js'
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