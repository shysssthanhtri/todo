/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
    "unused-imports",
    "boundaries",
  ],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:prettier/recommended",
  ],
  settings: {
    "boundaries/include": ["src/**/*"],
    "boundaries/elements": [
      {
        mode: "full",
        type: "shadcn-components",
        pattern: ["src/components/ui/**/*"],
      },
      {
        mode: "full",
        type: "feature",
        capture: ["featureName"],
        pattern: ["src/features/*/**/*"],
      },
      {
        mode: "full",
        type: "shared",
        pattern: ["src/lib/**/*", "src/shared/**/*", "src/styles/**/*"],
      },
      {
        mode: "full",
        type: "server",
        pattern: ["src/server/**/*", "src/env.js", "src/pages/api/**/*"],
      },
      {
        mode: "full",
        type: "client-api-util",
        pattern: ["src/utils/api.ts"],
      },
      {
        mode: "full",
        type: "pages",
        pattern: ["src/pages/*.tsx", "src/pages/authentication/**/*"],
      },
      {
        mode: "full",
        type: "generated-prisma-schema",
        pattern: ["src/schemas/**/*"],
      },
    ],
  },
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "boundaries/no-unknown": ["error"],
    "boundaries/no-unknown-files": ["error"],
    "boundaries/element-types": [
      "error",
      {
        default: "disallow",
        rules: [
          {
            from: ["feature"],
            allow: ["shadcn-components", "shared"],
          },
          {
            from: ["server"],
            allow: ["server"],
          },
          {
            from: ["client-api-util"],
            allow: ["server"],
          },
          {
            from: ["pages"],
            allow: ["client-api-util", "feature", "shared"],
          },
          {
            from: ["shadcn-components"],
            allow: ["shared"],
          },
          {
            from: ["shared"],
            allow: ["shared", "generated-prisma-schema", "client-api-util"],
          },
          {
            from: ["generated-prisma-schema"],
            allow: ["generated-prisma-schema"],
          },
        ],
      },
    ],
  },
};
module.exports = config;
