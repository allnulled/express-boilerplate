require("child_process").execSync("npm run build-parser", {
    cwd: __dirname + "/../../..",
    stdio: [process.stdin, process.stdout, process.stderr]
});