const withSass = require("@zeit/next-sass");
const withMDX = require("@zeit/next-mdx")({
  extension: /.mdx?$/,
  options: {
    hastPlugins: [require("mdx-prism")]
  }
});

module.exports = withMDX(withSass({
  pageExtensions: ['js', 'jsx', 'mdx', 'md'],
  webpack(config) {
    config.node = {
      fs: 'empty',
      module: 'empty'
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}));
