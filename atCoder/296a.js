process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// スキルチェックの基本となる、標準入力で値を取得し、
// 出力するコードを書いてみよう！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  let people = lines[1];
  let ret = people.match(/([a-z])\1{1,}/gi);
  if (ret) {
    console.log("No");
  } else {
    console.log("Yes");
  }
  return;
});
