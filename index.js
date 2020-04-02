//Hex to RGB
const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


//RGB to Hex
const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(parseInt(r)) + componentToHex(parseInt(g)) + componentToHex(parseInt(b));
}


if (process.argv[2] == 'hex') {
    console.log(hexToRgb(process.argv[3]));
} else if (process.argv[2] == 'rgb') {
    console.log(rgbToHex(process.argv[3], process.argv[4], process.argv[5]));
}