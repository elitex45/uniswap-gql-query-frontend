/* eslint-env node */

import type { CodegenConfig } from "@graphql-codegen/cli";

// Generates TS objects from the schemas returned by graphql queries
// To learn more: https://www.apollographql.com/docs/react/development-testing/static-typing/#setting-up-your-project
const config: CodegenConfig = {
  overwrite: true,
  schema: "./app/graphql/data/schema.graphql",
  documents: [
    "./app/graphql/data/**",
    "!./app/graphql/data/__generated__/**",
    "!**/thegraph/**",
  ],
  generates: {
    "app/graphql/data/__generated__/types-and-hooks.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        // This avoid all generated schemas being wrapped in Maybe https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#maybevalue-string-default-value-t--null
        maybeValue: "T",
        immutableTypes: true,
      },
    },
  },
};

// This is used in package.json when generating apollo schemas however the linter stills flags this as unused
// eslint-disable-next-line import/no-unused-modules
export default config;
