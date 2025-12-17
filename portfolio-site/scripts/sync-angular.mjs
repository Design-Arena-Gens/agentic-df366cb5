import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const angularDist = join(process.cwd(), "angular-showcase", "dist", "angular-showcase", "browser");
const target = join(process.cwd(), "public", "angular");

async function main() {
  try {
    await rm(target, { recursive: true, force: true });
    await mkdir(target, { recursive: true });
    await cp(angularDist, target, { recursive: true });
    console.log(`Synced Angular build to ${target}`);
  } catch (error) {
    console.error("Failed to sync Angular build:", error);
    process.exitCode = 1;
  }
}

await main();
