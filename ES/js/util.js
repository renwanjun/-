import object from "ES5/Extends/es5-prototypal-inheritance";

Array.matrix = function (numRows, numCols, initial) {
  const arr = [];
  for (let i = 0; i < numRows; i++) {
    let columns = [];
    for (let j = 0; j < numCols; j++) {
      columns[j] = initial;
    }
    arr[i] = columns[j];
  }
  return arr;
};

/**
 * 判断属性是否是原型属性
 * @param {Object} object 对象
 * @param {String} property 属性名
 * @returns
 */
function hasPrototypeProperty(object, property) {
  return !object.hasOwnProperty(property) && property in object;
}
