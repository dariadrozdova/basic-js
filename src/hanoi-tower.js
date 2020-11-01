const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const requiredNumberOfTurns = Math.pow(2, disksNumber) - 1;
  const requiredTime = Math.floor(requiredNumberOfTurns / (turnsSpeed/3600));
  return {
    turns: requiredNumberOfTurns,
    seconds: requiredTime
  };
};
