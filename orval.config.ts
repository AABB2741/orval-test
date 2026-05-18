import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "./spec.json",
      // target: "http://localhost:3333/docs/openapi.json",
    },
    output: {
      mode: "tags-split",
      target: "./src/api/generated/",
      schemas: "./src/api/generated/schemas/",
      client: "react-query",
      httpClient: "axios",
      mock: true,
      clean: true,
      formatter: "biome",
      namingConvention: "kebab-case",
    },
  },
});
