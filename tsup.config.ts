import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  target: "es3",
  dts: true,
  minify: true,
  sourcemap: true,
  clean: true,
  skipNodeModulesBundle: true,
});
