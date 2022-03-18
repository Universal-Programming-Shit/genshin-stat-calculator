module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "no-unused-vars": "off",
    "vue/no-empty-component-block": "error",
  },
  ignorePatterns: ["dist"],
};
