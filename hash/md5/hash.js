const crypto = require("crypto"); // "^1.0.1"

const text = "password";

const hash = crypto.createHash("md5").update(text).digest("hex");
console.log(hash); // 5f4dcc3b5aa765d61d8327deb882cf99
