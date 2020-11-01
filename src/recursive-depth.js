const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    if (arr.some(item => Array.isArray(item))){
      let newArr = arr.reduce((acc, curr) => acc.concat(curr), []);
      return depth + this.calculateDepth(newArr);
    }
    return depth;
  }
};