module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [  "@vue/eslint-config-cli-plugin-babel/preset","@vue/cli-plugin-babel/preset","eslint:recommended","plugin:prettier/recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/block-lang": "error",
    "vue/html-indent": "error",
    'vue/script-setup-uses-vars': 'error',
  }
};
