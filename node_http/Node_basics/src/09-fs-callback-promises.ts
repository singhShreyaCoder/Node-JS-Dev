import path from "node:path";
import fs from "node:fs";
import fsPromises from "node:fs/promises";

const DEMO_FOLDER_PATH = path.join(process.cwd(), "file-system", "fs-demo");
const CALLBACK_FILE_PATH = path.join(DEMO_FOLDER_PATH, "callback-note.txt");
const PROMISES_FILE_PATH = path.join(DEMO_FOLDER_PATH, "promises-note.txt");

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

function runCallbackExample(): Promise<FileResult> {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      CALLBACK_FILE_PATH,
      "Created using callback fs",
      "utf-8",
      (writeError) => {
        if (writeError) {
          reject(writeError);
          return;
        }

        fs.appendFile(
          CALLBACK_FILE_PATH,
          "Append using callback fs",
          "utf-8",
          (appendError) => {
            if (appendError) {
              reject(appendError);
              return;
            }

            fs.readFile(CALLBACK_FILE_PATH, "utf-8", (readError, content) => {
              if (readError) {
                reject(readError);
                return;
              }

              fs.stat(CALLBACK_FILE_PATH, (statError, stats) => {
                if (statError) {
                  reject(statError);
                  return;
                }

                resolve({
                  style: "callback",
                  content,
                  sizeInBytes: stats.size,
                  fileName: path.basename(CALLBACK_FILE_PATH),
                });
              });
            });
          },
        );
      },
    );
  });
}

//promises

async function runPromisesExample(): Promise<FileResult> {
  await fsPromises.writeFile(
    PROMISES_FILE_PATH,
    "Created using promise apis",
    "utf-8",
  );

  const content = await fsPromises.readFile(PROMISES_FILE_PATH, "utf-8");
  const stats = await fsPromises.stat(PROMISES_FILE_PATH);

  return {
    style: "promises",
    content,
    fileName: path.basename(PROMISES_FILE_PATH),
    sizeInBytes: stats.size,
  };
}

async function main(): Promise<void> {
  try {
    ensureDemoFileExits();
    const callbackResult = await runCallbackExample();
    const promiseResult = await runPromisesExample();
    console.log(callbackResult, promiseResult);
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.error("File system error", message);
  }
}

main();
