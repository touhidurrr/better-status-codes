import { version } from "../package.json";

Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  naming: "[dir]/browser.[ext]",
  sourcemap: true,
  minify: true,

  banner: `// better-status-codes@${version} by touhidurrr`,
});
