module.exports = {
  extends: ["takamaki", "react-app"],
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    },
    "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
  },
  rules: {
    "react/prop-types": 0,
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"]
  },
  plugins: ["react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: {
        browser: true,
        es6: true,
        jest: true
      },
      extends: [
        "takamaki",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
      },
      plugins: ["react", "@typescript-eslint"],
      settings: {
        react: {
          pragma: "React",
          version: "detect"
        }
      }
    }
  ]
};
