const { ESLINT_MODES } = require("@craco/craco");
const CracoAlias = require("craco-alias");

module.exports = {
  eslint: {
    mode: ESLINT_MODES.file,
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "#": "./src/lib",
          "#/*": "./src/lib/*",
          "@stores": "./src/stores",
          "@stores/*": "./src/stores",
          _: "./src/assets",
          "_/*": "./src/assets/*",
          "@components": "./src/components",
          "@components/*": "./src/components/*",
          "@layouts": "./src/layouts",
          "@layouts/*": "./src/layouts/*",
          "@pages": "./src/pages",
          "@pages/*": "./src/pages/*",
        },
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
