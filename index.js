const hexConversion = require('./hex-to-rgb.js');
const rgbConversion = require('./rgb-to-hex.js');


if (process.argv[2] == 'hex') {
    console.log(hexConversion.hexToRgb(process.argv[3]));
} else if (process.argv[2] == 'rgb') {
    console.log(rgbConversion.rgbToHex(process.argv[3], process.argv[4], process.argv[5]));
}