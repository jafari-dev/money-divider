const { ESLINT_MODES } = require("@craco/craco");
const path = require("path");

export default {
  eslint: {
    mode: ESLINT_MODES.file,
  },
  webpack: {
    alias: {
      "#": path.resolve(__dirname, "./src/lib"),
      "#/*": path.resolve(__dirname, "./src/lib/*"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@stores/*": path.resolve(__dirname, "./src/stores"),
      _: path.resolve(__dirname, "./src/assets"),
      "_/*": path.resolve(__dirname, "./src/assets/*"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@components/*": path.resolve(__dirname, "./src/components/*"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@layouts/*": path.resolve(__dirname, "./src/layouts/*"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@pages/*": path.resolve(__dirname, "./src/pages/*"),
    },
  },
};
