import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-trailing-spaces": "error",
      "indent": ["error", 2],
      "eol-last": ["error", "always"],
      "semi": [2, "always"],
      "max-len": ["error", { "code": 80,  "tabWidth": 2, "ignoreTrailingComments": true, "ignoreComments": true}],
      '@typescript-eslint/no-explicit-any': "off",
      "object-curly-spacing": ["error", "always"],
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { files: ["**/*.jsx"], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  ...fixupConfigRules(pluginReactConfig),
];