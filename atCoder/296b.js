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
  let grid = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let x = "";
  let y = 0;
  for (let i = 0; i < 8; i++) {
    let index = lines[i].indexOf("*");
    if (index !== -1) {
      x = grid[index];
      y = 8 - i;
    }
  }
  output = x.concat(String(y));
  console.log(output);
});
