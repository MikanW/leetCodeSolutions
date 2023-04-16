// process.stdin.resume();
// process.stdin.setEncoding("utf8");
// // 自分の得意な言語で
// // スキルチェックの基本となる、標準入力で値を取得し、
// // 出力するコードを書いてみよう！
// var lines = [];
// var reader = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// reader.on("line", (line) => {
//   lines.push(line);
// });

// reader.on("close", () => {
//   let nums = lines[0].split("");
//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let eor = parseInt(nums[i]) === 0 ? -1 : parseInt(nums[i]);
//     for (let j = i + 1; j < nums.length; j += 2) {
//       eor = eor ^ (parseInt(nums[j]) === 0 ? -1 : parseInt(nums[j]));
//       if (eor === 0) {
//         count += 1;
//       }
//       console.log(i, j);
//     }
//   }
//   console.log(count);
//   return;
// });

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
  let nums = lines[0].split("");
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    let map = new Map();
    map.set(nums[i]);
    for (let j = i + 1; j < nums.length; j++) {
      if (map.has(nums[j])) {
        map.delete(nums[j]);
      } else {
        map.set(nums[j]);
      }
      if (map.size === 0) {
        count += 1;
      }
    }
  }
  console.log(count);
  return;
});

// time limit exceeded
