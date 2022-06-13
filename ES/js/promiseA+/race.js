Promise.race2 = function (promises) {
  return new Pomise((resolve, reject) => {
    promises.forEach(p => {
      Promise.resolve(p).then(resolve).catch(reject);
    });
  });
};
