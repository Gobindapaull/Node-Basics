// node version = v21.7.1

const crypto = require("crypto")
console.log(`UUID : ${crypto.randomUUID()}`)

hash = crypto.hash("sha256", "random text")
hash2 = crypto.hash("md5", "random text")

console.log(`hash : ${hash}`)
console.log(`hash2 : ${hash2}`)

process.loadEnvFile(".env")
console.log(`URL : ${process.env.URL}`)
