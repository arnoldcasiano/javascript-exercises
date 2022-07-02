const ftoc = function(degrees) {
  let celcius = (degrees - 32) * 5/9;
  if (celcius % 1 !== 0) {
      return Math.round(celcius * 10) / 10;
  } else {
      return celcius;
  }
};

const ctof = function(degrees) {
  let fahren = (degrees * 1.8) + 32;
  if (fahren % 1 !== 0) {
    return Math.round(fahren * 10) / 10;
  } else {
    return fahren;
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
