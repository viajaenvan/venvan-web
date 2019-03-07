var wallabyWebpack = require("wallaby-webpack");
var path = require("path");

var compilerOptions = Object.assign(
  require("./tsconfig.json").compilerOptions,
  require("./src/client/tsconfig.spec.json").compilerOptions
);

module.exports = function(wallaby) {
  var webpackPostprocessor = wallabyWebpack({
    entryPatterns: ["src/client/wallabyTest.js", "src/client/**/*spec.js"],

    module: {
      rules: [
        { test: /\.css$/, loader: ["raw-loader"] },
        { test: /\.html$/, loader: "raw-loader" },
        {
          test: /\.ts$/,
          loader: "@ngtools/webpack",
          include: /node_modules/,
          query: { tsConfigPath: "tsconfig.json" }
        },
        {
          test: /\.js$/,
          loader: "angular2-template-loader",
          exclude: /node_modules/
        },
        { test: /\.styl$/, loaders: ["raw-loader", "stylus-loader"] },
        { test: /\.less$/, loaders: ["raw-loader", { loader: "less-loader" }] },
        { test: /\.scss$|\.sass$/, loaders: ["raw-loader", "sass-loader"] },
        { test: /\.(jpg|png|svg)$/, loader: "raw-loader" }
      ]
    },

    resolve: {
      extensions: [".js", ".ts"],
      modules: [
        path.join(wallaby.projectCacheDir, "src/client/app"),
        path.join(wallaby.projectCacheDir, "src/client"),
        "node_modules"
      ]
    },
    node: {
      fs: "empty",
      net: "empty",
      tls: "empty",
      dns: "empty"
    }
  });

  return {
    files: [
      {
        pattern: "src/client/**/*.+(ts|css|less|scss|sass|styl|html|json|svg)",
        load: false
      },
      { pattern: "src/client/**/*.d.ts", ignore: true },
      { pattern: "src/client/**/*spec.ts", ignore: true }
    ],

    tests: [
      { pattern: "src/client/**/*spec.ts", load: false },
      { pattern: "src/client/**/*e2e-spec.ts", ignore: true }
    ],

    testFramework: "jasmine",

    compilers: {
      "**/*.ts": wallaby.compilers.typeScript(compilerOptions)
    },

    middleware: function(app, express) {
      var path = require("path");
      app.use(
        "/favicon.ico",
        express.static(path.join(__dirname, "src/client/favicon.ico"))
      );
      app.use(
        "/assets",
        express.static(path.join(__dirname, "src/client/assets"))
      );
    },

    env: {
      kind: "chrome"
    },

    postprocessor: webpackPostprocessor,

    setup: function() {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};
