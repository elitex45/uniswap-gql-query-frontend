/* eslint-env node */

module.exports = {
  src: "./app",
  language: "typescript",
  schema: "./app/graphql/data/schema.graphql",
  exclude: [
    "**/node_modules/**",
    "**/__mocks__/**",
    "**/__generated__/**",
    "**/thegraph/**",
  ],
};
