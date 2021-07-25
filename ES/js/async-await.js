async function print(arr) {
  // 继发执行
  for (let val of arr) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(val);
        resolve(val);
      }, 1000);
    });
  }
}
print([1, 2, 3]);

for (let i = 1; i < 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * i);
}
