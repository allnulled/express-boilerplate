require("child_process").execSync("npm test", {
    cwd: __dirname + "/../../..",
    stdio: [process.stdin, process.stdout, process.stderr]
});