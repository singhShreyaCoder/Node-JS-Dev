const textBuffer = Buffer.from("Node");
console.log(textBuffer);

console.log(textBuffer.toString("utf-8"));

const engBuffer = Buffer.from("Hello");
console.log(engBuffer.length);

//allocation

const fixedBuffer = Buffer.alloc(5);
console.log("Empty fixed buffer", fixedBuffer);

fixedBuffer.write("API");
console.log("Fixed buffer after write", fixedBuffer);
console.log(fixedBuffer.toString("utf-8"));

//chunks

const chunks = [
  Buffer.from("Hello "),
  Buffer.from("Node Js "),
  Buffer.from("Buffer"),
];

const combineBuffer = Buffer.concat(chunks);
console.log(combineBuffer, combineBuffer.toString("utf-8"));
