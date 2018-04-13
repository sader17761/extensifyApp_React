// webpack.development.config.js
module.exports = {
    + mode: 'development'
    - plugins: [
    -   new webpack.NamedModulesPlugin(),
    -   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
    - ]
    }