module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    quotes: ["error", "double"],
    "linebreak-style": 0,
    indent: [2, 2],
    "no-unused-vars": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
};
