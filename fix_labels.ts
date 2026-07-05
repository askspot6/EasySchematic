import * as fs from "fs";
import * as path from "path";

const devicesDir = path.join(process.cwd(), "src", "devices");
const ourFiles = new Set(["tristate.ts","symetrix.ts","bss.ts","eaw.ts","crown.ts","jbl.ts","ev.ts","atlona.ts","visionary.ts","_helpers.ts"]);

const files = fs.readdirSync(devicesDir).filter(f => f.endsWith(".ts") && !ourFiles.has(f));

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(devicesDir, file);
  let content = fs.readFileSync(filePath, "utf8");
  let fixed = 0;

  const mfgrMatches = [...content.matchAll(/manufacturer:\s*"([^"]+)"/g)];
  
  for (const mfgrMatch of mfgrMatches) {
    const mfgr = mfgrMatch[1];
    const labelRegex = new RegExp(`(label:\\s*")${mfgr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+`, 'g');
    const before = content;
    content = content.replace(labelRegex, '$1');
    if (content !== before) fixed++;
  }

  if (fixed > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${fixed} labels in ${file}`);
    totalFixed += fixed;
  }
}

console.log(`\nTotal: ${totalFixed} labels fixed across ${files.length} files`);
