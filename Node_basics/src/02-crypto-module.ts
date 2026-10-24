import crypto from "node:crypto";

/*built-in node js module used for security related tast, creating random UUID OR IDs,
creating secure token, hashing data,to verify data was not changed, encrypt/decrypt*/

const requestId = crypto.randomUUID();
console.log(requestId);
//UUID= universal unique identifier

const resetToken = crypto.randomBytes(16).toString("hex");
console.log(resetToken);

const text = "Hello Node";
const hash = crypto.createHash("sha256").update(text).digest("hex");
console.log(hash);

//normal hash : data -> hash
//HMAC :data + secret  -> signed hash

const secretKey = "my-super-secret-key";
const message = "this is a super secret key";
const signature = crypto
  .createHmac("sha256", secretKey)
  .update(message)
  .digest("hex");
console.log(signature);

const signatureVerify = crypto
  .createHmac("sha256", secretKey)
  .update(message)
  .digest("hex");
console.log("Signature is valid and matching", signature === signatureVerify);
