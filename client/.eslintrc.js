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
      "import/prefer-default-export": "off",
      "max-len": "off",
      "arrow-body-style": "off",
      "react/jsx-one-expression-per-line": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "no-unused-vars": "warn",
      "no-useless-escape": "off",
      "prefer-regex-literals": "off",
      "prefer-template": "off",
      "react/no-array-index-key": "off",
    },
  };