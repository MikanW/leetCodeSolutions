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
  if (parseInt(lines[0]) <= 1) {
    console.log(0);
    return;
  }

  let socks = lines[1].split(" ");
  let pair = 0;
  let map = new Map();

  for (let sock of socks) {
    let color = parseInt(sock);
    if (map.has(color)) {
      map.delete(color);
      pair += 1;
    } else {
      map.set(color);
    }
  }

  console.log(pair);
  return;
});
