const nodeEnv = process.env.NODE_ENV ?? "development";

const command = process.argv[2] ?? "start";

const shouldFail = process.argv.includes("--fail");
const shouldCrash = process.argv.includes("--crash");

process.on("exit", (code) => {
  console.log(`process finished with exit code ${code}`);
});

function runApp(): void {
  console.log({ command });
}

if (shouldFail) {
  console.error("Manual failure triggered with --fail flag");
  process.exit(1);
}

if (shouldCrash) {
  console.error("Manual crash triggered with --crash flag");
  process.exit(1);
}
