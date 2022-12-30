const convertToCelsius = function(fah) {
  let num = (fah -32) * (5/9);
  let rounded = Math.round(num *10) / 10
  return rounded;
};
//console.log(convertToCelsius(100));


const convertToFahrenheit = function(cel) {
  let num = (cel * (9/5)) + 32;
  let rounded = Math.round(num *10) / 10
  return rounded;
};
console.log(convertToFahrenheit(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
