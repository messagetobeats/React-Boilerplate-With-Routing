var path = require('path');

module.exports =
{
    entry: './app/app.jsx',
    output: { path:__dirname, filename:'./public/bundle.js' },
    resolve: {
                alias:
                {
                    Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
                    Main: path.resolve(__dirname, 'app/components/Main.jsx'),
                    Page1: path.resolve(__dirname, 'app/components/Page1.jsx'),
                    Page2: path.resolve(__dirname, 'app/components/Page2.jsx'),
                    Page3: path.resolve(__dirname, 'app/components/Page3.jsx')
                },

                extensions: ['.js', '.jsx']
             },

    module:
    {
        loaders:[{

            loader:'babel-loader',

            query:{

              presets: ['react', 'es2015']
            },

            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]

    }
}
