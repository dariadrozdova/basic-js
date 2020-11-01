const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    return matrix.reduce((catsNumber, arr) => catsNumber +
    arr.reduce((count, item) => item === '^^' ? ++count : count, 0), 0);
};
