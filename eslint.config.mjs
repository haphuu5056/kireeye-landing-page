import { defineConfig, globalIgnores } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";
import reactHooks from "eslint-plugin-react-hooks";

const eslintConfig = defineConfig([
  nextPlugin.configs["core-web-vitals"],
  reactHooks.configs.flat.recommended,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
  ]),
]);

export default eslintConfig;
