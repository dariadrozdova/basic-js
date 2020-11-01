const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let add = options.addition === undefined ? '' : String(options.addition);
    if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
    if (options.repeatTimes === undefined) options.repeatTimes = 1;
    if (options.additionSeparator === undefined) options.additionSeparator = '|';
    if (options.separator === undefined) options.separator = '+';

    let additionArray = new Array(options.additionRepeatTimes);
    let additionString = additionArray.fill(add).join(options.additionSeparator);
    let resultArray = new Array(options.repeatTimes);
    return resultArray.fill(str + additionString).join(options.separator);
    }
  