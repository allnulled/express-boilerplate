require("child_process").execSync("npm run build-styles", {
  cwd: __dirname + "/../../..",
  stdio: [process.stdin, process.stdout, process.stderr]
});