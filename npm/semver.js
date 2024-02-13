const semver = require("semver");

console.log(semver.valid("0.8.25"));
console.log(semver.gt("1.2.3", "2.3.4"));
console.log(semver.coerce("v3"));
