import fs from "fs";
import path from "path";

const root = path.resolve(process.cwd());
const srcDir = path.join(root, "source");
const destDir = path.join(root, "public", "source");

function copyRecursive(from, to) {
  if (!fs.existsSync(from)) {
    console.warn(`[copy-source] source not found: ${from}`);
    return;
  }
  const stat = fs.statSync(from);
  if (stat.isDirectory()) {
    fs.mkdirSync(to, { recursive: true });
    for (const entry of fs.readdirSync(from)) {
      copyRecursive(path.join(from, entry), path.join(to, entry));
    }
  } else {
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(from, to);
  }
}

copyRecursive(srcDir, destDir);
console.log(`[copy-source] copied ${srcDir} -> ${destDir}`);
