module.exports = {
  root: true,
  env: {
    node: true,
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
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "no-unused-vars": "off",
  },
  ignorePatterns: ["dist"],
};
