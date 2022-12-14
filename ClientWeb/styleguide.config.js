var webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === "true") {
    return false;
  }

  try {
    require.resolve("react/jsx-runtime");
    return true;
  } catch (e) {
    return false;
  }
})();
// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve("style-loader"),
    {
      loader: require.resolve("css-loader"),
      options: cssOptions,
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve("postcss-loader"),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: "postcss",
        plugins: () => [
          require("postcss-flexbugs-fixes"),
          require("postcss-preset-env")({
            autoprefixer: {
              flexbox: "no-2009",
            },
            stage: 3,
          }),
        ],
        sourceMap: true,
      },
    },
  ].filter(Boolean);
  if (preProcessor) {
    loaders.push({
      loader: require.resolve(preProcessor),
      options: {
        sourceMap: true,
      },
    });
  }
  return loaders;
};

module.exports = {
  components: "src/components/**/*.js",
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            customize: require.resolve(
              "babel-preset-react-app/webpack-overrides"
            ),
            presets: [
              [
                require.resolve("babel-preset-react-app"),
                {
                  runtime: hasJsxRuntime ? "automatic" : "classic",
                },
              ],
            ],

            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            // See #6846 for context on why cacheCompression is disabled
            cacheCompression: false,
          },
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: getStyleLoaders({
            importLoaders: 1,
            sourceMap: true,
          }),
          sideEffects: true,
        },
        {
          //todo ????????????less???????????????modules????????????????????????????????????
          test: /\.less$/,
          use: getStyleLoaders(
            {
              importLoaders: 2,
              sourceMap: false,
              modules: true,
            },
            "less-loader"
          ),
        },
      ],
    },
    plugins: [new NodePolyfillPlugin()],
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
      },
    },
  },
  sections: [
    {
      name: "Panel",
      components: ["src/components/Panel/index.js"],
      content: "docs/Panel.md",
      sections: [
        {
          name: "Tab",
          components: [
            "src/components/Panel/Tab/index.js",
            "src/components/Panel/QuestionType/index.js",
          ],
        },
        {
          name: "Content",
          components: [
            "src/components/Panel/Content/index.js",
            "src/components/Panel/Content/List/index.js",
            "src/components/Panel/Content/Setting/index.js",
          ],
        },
      ],
    },
    {
      name: "Other",
      components: [],
    },
  ],
};
