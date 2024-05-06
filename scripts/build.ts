import { Glob, spawn, spawnSync } from "bun";
import { rename } from "node:fs/promises";

const glob = new Glob("dist/*.js");

(async () => {
  spawnSync(["bun", "build:esm"]);

  const renameTasks = [];
  for await (const file of glob.scan(".")) {
    const task = rename(file, file.replace(/\.js$/, ".mjs"));
    renameTasks.push(task);
  }
  await Promise.all(renameTasks);

  spawn(["bun", "build:cjs"]);
  spawn(["bun", "build:dts"]);
})();
