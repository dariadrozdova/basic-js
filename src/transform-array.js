const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!arr || !(arr instanceof Array)) {
        throw Error;
    }
    const transformed = [];
    const discardedIndex= new Set();
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;
                discardedIndex.add(i);
                break;
            case '--discard-prev':
                if (i > 0 && !discardedIndex.has(i - 1)) {
                    discardedIndex.add(i - 1);
                    transformed.pop();
                }
                break;
            case '--double-next':
                if (i < arr.length - 1) {
                    transformed.push(arr[i + 1]);
                }
                break;
            case '--double-prev':
                if (i > 0 && !discardedIndex.has(i - 1)) {
                    transformed.push(arr[i - 1]);
                }
                break;
            default:
                transformed.push(arr[i]);
        }
    }
    return transformed;
};
