const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if( typeof sampleActivity !== 'string') {
    return false;
  }
  const SAMPLE_ACTIVITY = parseFloat(sampleActivity);
  let k = 0.693 / HALF_LIFE_PERIOD;
  if (SAMPLE_ACTIVITY > 0 && SAMPLE_ACTIVITY <= 15) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / SAMPLE_ACTIVITY) / k);
  } else {
    return false;
  }
};
