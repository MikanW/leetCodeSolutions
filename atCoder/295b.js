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
  let xTotal = parseInt(lines[0].split(" ")[1]);
  let yTotal = parseInt(lines[0].split(" ")[0]);
  var grid = lines.slice(1);

  var replace = function (x, y, boom) {
    for (let i = 0; i < yTotal; i++) {
      let line = grid[i].split("");
      for (let j = 0; j < xTotal; j++) {
        if (Math.abs(i - x) + Math.abs(j - y) > boom) {
          continue;
        }
        if (line[j] == "#") {
          line[j] = ".";
        }
      }
      grid[i] = line.join("");
    }
    return;
  };

  for (let line = 0; line < yTotal; line++) {
    let boom = grid[line].match(/[1-9]/);

    while (boom) {
      let offset = grid[line].indexOf(boom);
      grid[line] = grid[line].replace(boom, ".");
      replace(line, offset, parseInt(boom));
      boom = grid[line].match(/[1-9]/);
    }
  }
  console.log(grid.join("\n"));
  return;
});
