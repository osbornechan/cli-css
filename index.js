const hexConvertToRgb = require('./hex-to-rgb.js');
const hexConvertToHsl = require('./hex-to-hsl.js');
const rgbConvertToHex = require('./rgb-to-hex.js');
const rgbConvertToHsl = require('./rgb-to-hsl.js');

// set as red
var r = 255;
var b = 0;
var g = 0;

// this special console will create colored output
//console.log(`\x1b[38;2;${r};${g};${b}m%s\x1b[0m`, myOutput);

let hex = hexConvertToRgb.hexToRgb(process.argv[3])

if (process.argv[2] == 'hex') {
    console.log(`\x1b[38;2;${r};${g};${b}m%s\x1b[0m`,
        'rgb: ' + hex.r + ',' + hex.g + ',' + hex.b + ' , ' + hexConvertToHsl.hexToHSL(process.argv[3]));
} else if (process.argv[2] == 'rgb') {
    console.log(`\x1b[38;2;${r};${g};${b}m%s\x1b[0m`,
        'hex: ' + rgbConvertToHex.rgbToHex(process.argv[3], process.argv[4], process.argv[5]) + ' , ' + 'hsl(' +rgbConvertToHsl.rgbToHsl(process.argv[3], process.argv[4], process.argv[5]) + ')');
}