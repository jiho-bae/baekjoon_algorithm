const sol = (line) => {
  const [N, M] = line.split(" ").map((v) => +v);
  let result = "";

  const arr = new Array(M).fill(0);
  function dfs(L, K) {
    if (L === M) {
      const temp = [];
      for (let x of arr) temp.push(x);
      result += `${temp.join(" ")}\n`;
      return;
    }

    for (let i = K; i <= N; i++) {
      arr[L] = i;
      dfs(L + 1, i + 1);
    }
    return;
  }
  dfs(0, 1);
  console.log(result);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    sol(line);
  })
  .on("close", () => {
    process.exit();
  });
