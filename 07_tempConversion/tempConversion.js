//(0°F − 32) × 5/9 = -17,78°C
const convertToCelsius = function(degre) {
  let temp = (degre - 32) * 5/9;
  return Math.round(temp * 10) / 10;
};


//0°C × 9/5) + 32 = 32°F
const convertToFahrenheit = function(degre) {
  let temp = (degre * 9/5) + 32;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
