module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: "blog",
                short_name: "blog",
                start_url: "/",
                background_color: "#000",
                theme_color: "#000",
                display: "standalone",
                icon: "src/images/icon.png",
            }
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-emotion',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        'gatsby-transformer-remark',
    ]
}