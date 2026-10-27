import path from "node:path";

//current working directory
const projectRoot = process.cwd();
console.log(projectRoot);

//create path string
const userId = "21";
const originalName = "profile.photo.png";

const uploadFilePath = path.join(
  projectRoot,
  "uploads",
  "users",
  userId,
  originalName,
);

console.log(uploadFilePath);

//show file name
const fileName = path.basename(uploadFilePath);
console.log(fileName);

//show extension name
const fileExt = path.extname(uploadFilePath);
console.log(fileExt);

//show directory(parent folder) name
const parentFolder = path.dirname(uploadFilePath);
console.log(parentFolder);
