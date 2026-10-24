import * as os from "node:os";

function runOsDemo(): void {
  console.log("Platform:", os.platform());
  console.log("Architecture:", os.arch());
  console.log("OS Type:", os.type());
  console.log("OS Release:", os.release());

  console.log("Home Directory:", os.homedir());
  console.log("Temp Directory:", os.tmpdir());

  const cpus = os.cpus();
  console.log("CPU length:", cpus.length);
  console.log("CPU Model:", cpus[0].model);
  console.log("CPU Speed:", cpus[0].speed);

  console.log("Total Memory:", os.totalmem());
  console.log("Free Memory:", os.freemem());
}

runOsDemo();
