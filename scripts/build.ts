import { Glob, spawn, spawnSync } from "bun";
import { rename, rm } from "node:fs/promises";

const glob = new Glob("dist/*.js");

const main = async () => {
  await rm("dist", { recursive: true, force: true });
  spawnSync(["bun", "build:esm"]);

  const renameTasks = [];
  for await (const file of glob.scan(".")) {
    const task = rename(file, file.replace(/\.js$/, ".mjs"));
    renameTasks.push(task);
  }
  await Promise.all(renameTasks);

  return Promise.all([
    spawn(["bun", "build:cjs"]).exited,
    spawn(["bun", "build:dts"]).exited,
    spawn(["bun", "build:browser"]).exited,
  ]);
};

const start = Bun.nanoseconds();
main().then(() => {
  const end = Bun.nanoseconds();
  const elapsed = ((end - start) / 1_000_000_000).toFixed(2);
  console.log(`\nBuild completed in ${elapsed} seconds.`);
});
