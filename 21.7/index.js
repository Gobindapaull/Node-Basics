// node version = v21.7.1

process.loadEnvFile(".env")
console.log(process.env.URL)

const crypto = require("crypto")
console.log(crypto.randomUUID())

hash = crypto.hash("sha256", "value to hash")
hash2 = crypto.hash("sha256", "value to hash1")
console.log(hash)
console.log(hash2)
