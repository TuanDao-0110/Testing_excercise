import { defineConfig } from "vitest/config";

export default defineConfig({
  define: {
    "import.meta.vitest": "underfined",
  },
  test: {
    includeSource: ["src/**/*.{js,ts}"],
    coverage: {
      reporter: ["text", "html"],
    },
  },
});
