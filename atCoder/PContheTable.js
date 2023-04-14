process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
 
reader.on('close', () => {
  let height = parseInt(lines[0].split(' ')[0]);
 
  for ( let i=0; i<height; i++ ) {
    str = lines[i+1];
    while(str.indexOf('TT') !== -1) {
      str = str.replace('TT', 'PC');
    }
    console.log(str);
  }
  return;
});