import { Readable, Transform, Writable } from "node:stream";
import { pipeline } from "node:stream/promises";

const readableStream = Readable.from(["helllo", "from", "node.js", "streams"]);

const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const text = chunk.toString();
    callback(null, text.toUpperCase());
  },
});

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log("recieved chunk:", chunk.toString());
    callback();
  },
});

async function main(): Promise<void> {
  try {
    await pipeline(readableStream, uppercaseTransform, writableStream);

    console.log("stream completed");
  } catch (error) {
    const msg = error instanceof Error ? error.message : "unknown error";
    console.error("stream failed", msg);
  }
}

main();
