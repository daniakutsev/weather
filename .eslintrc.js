
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [ "eslint:recommended","plugin:vue/vue3-recommended","plugin:prettier/recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  }
};
