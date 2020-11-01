const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position)) {
      this.arr.splice(position - 1, 1);
    } else {
      this.arr = [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr;
    this.arr = [];
    return result.join('~~');
  }
};

module.exports = chainMaker;
