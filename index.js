const hexConvertToRgb = require('./hex-to-rgb.js');
const hexConvertToHsl = require('./hex-to-hsl.js');
const rgbConvertToHex = require('./rgb-to-hex.js');
const rgbConvertToHsl = require('./rgb-to-hsl.js');

let hex = hexConvertToRgb.hexToRgb(process.argv[3])

if (process.argv[2] == 'hex') {
    console.log('rgb: ' + hex.r + ',' + hex.g + ',' + hex.b + ' , ' + hexConvertToHsl.hexToHSL(process.argv[3]));
} else if (process.argv[2] == 'rgb') {
    console.log('hex: ' + rgbConvertToHex.rgbToHex(process.argv[3], process.argv[4], process.argv[5]) + ' , ' + 'hsl(' +rgbConvertToHsl.rgbToHsl(process.argv[3], process.argv[4], process.argv[5]) + ')');
}