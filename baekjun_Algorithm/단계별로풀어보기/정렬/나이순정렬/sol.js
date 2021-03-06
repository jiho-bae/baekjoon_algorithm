function sol(input) {
  const N = +input[0];
  let answer = "";
  const arr = [];
  for (let i = 1; i <= N; i++) {
    const [age, name] = input[i].split(" ");
    arr.push([age, name]);
  }
  arr.sort((a, b) => {
    if (a[0] === b[0]) return 0;
    return a[0] - b[0];
  });

  arr.forEach(([age, name]) => {
    answer += `${age} ${name}\n`;
  });

  return answer;
}

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(sol(input));
    process.exit();
  });
