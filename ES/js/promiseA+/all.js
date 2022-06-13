Promise.all2 = function (ps) {
  return new Promise((resolve, reject) => {
    if (!ps[Symbol.iterator]) return reject;
    let values = [];
    let count = 0;
    let length = ps.length;

    ps = Array.from(ps);
    ps.forEach((p, index) => {
      let _index = index;
      Promise.resolve(p)
        .then(value => {
          values[_index] = value;
          if (++count == length) return resolve(values);
        })
        .catch(reject);
    });
  });
};

const arrs = [2, Promise.resolve(4)];
// let arrs = "sfdsfds";
// const arrs = [
//   Promise.resolve(2),
//   Promise.resolve(4),
//   new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("dsdsdas");
//     }, 4000);
//   }),
// ];
Promise.all2(arrs)
  .then(value => {
    console.log(value);
  })
  .catch(reason => {
    console.log(reason);
  });
