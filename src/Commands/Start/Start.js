require("child_process").execSync("npm start", {
    cwd: __dirname + "/../../..",
    stdio: [process.stdin, process.stdout, process.stderr]
});