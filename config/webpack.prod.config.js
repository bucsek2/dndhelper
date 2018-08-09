import base from './webpack.base.config'
import merge from 'webpack-merge'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

export default merge(base, {
    output:{
        filename: "bundle.min.js"
    },
    plugins: [
        new UglifyJsPlugin()
    ],
    mode: 'production'
})
