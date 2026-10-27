import path from "node:path";
import fs from "node:fs";

const DEMO_FOLDER_PATH = path.join(process.cwd(), "file-system", "fs-demo");
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH, "sync-note.txt");

type FileResult = {
  style: string;
  fileName: string;
  content: string;
  sizeInBytes: number;
};

function ensureDemoFileExits(): void {
  if (!fs.existsSync(DEMO_FOLDER_PATH)) {
    fs.mkdirSync(DEMO_FOLDER_PATH, { recursive: true });
  }
}

function runSyncExample(): FileResult {
  //write content to a file if the file doesn't exist node will create it
  fs.writeFileSync(SYNC_FILE_PATH, "created using sync fs", "utf-8");

  //wite content at the end of the file it does not create any file
  fs.appendFileSync(SYNC_FILE_PATH, "appended using sync fs", "utf-8");

  //read the content of file
  const content = fs.readFileSync(SYNC_FILE_PATH, "utf-8");

  const stats = fs.statSync(SYNC_FILE_PATH);

  return {
    style: "sync",
    content,
    fileName: path.basename(SYNC_FILE_PATH),
    sizeInBytes: stats.size,
  };
}

async function main(): Promise<void> {
  try {
    ensureDemoFileExits();
    const syncResult = runSyncExample();
    console.log(syncResult);
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.error("File system error", message);
  }
}

main();
