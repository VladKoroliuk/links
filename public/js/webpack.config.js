import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export default {
    mode: "development",
    entry: {
        app: './app.js',
        login: './src/pages/login.js',
        signup: './src/pages/signup.js',
        main: './src/pages/main.js',
        list: './src/pages/list.js',
        statistics: './src/pages/statistics.js',
        notFound: './src/pages/notFound.js',
        follow: './src/pages/follow.js'
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