module.exports = {
  root: true,
  env: {
    browser: true,
    "vue/setup-compiler-macros": true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    // "eslint:recommended",
    "plugin:vue/base",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "vue/no-unused-vars": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "vue/script-setup-uses-vars": "error",
    "vue/no-empty-component-block": "error",
  },
  ignorePatterns: ["dist"],
};
