import fs from "fs";

const day = process.argv[process.argv.indexOf("--day") + 1];
const part = process.argv[process.argv.indexOf("--part") + 1];
const input = process.argv[process.argv.indexOf("--input") + 1];

const data = fs.readFileSync(input, "utf8");
const solution = require(`./src/day${day}/part${part}`).default

const res = solution(data);
console.log(res);
