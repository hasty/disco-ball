const childProcess = require("child_process");
const os = require("os");
const process = require("process");

function runDisco() {
  const platform = os.platform();
  const arch = os.arch();
  const executable = `alchemy-disco-${platform}-${arch}`;
  const path = `${__dirname}/${executable}`;
  console.log("Running " + path);
  const out = childProcess.spawnSync(path, { stdio: 'inherit' });
  process.exit(out.status);
}

console.log("Loaded module.");
if (require.main === module) {
  runDisco();
}
