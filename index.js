const hexConvertToRgb = require('./hex-to-rgb.js');
const hexConvertToHsl = require('./hex-to-hsl.js');
const rgbConvertToHex = require('./rgb-to-hex.js');
const rgbConvertToHsl = require('./rgb-to-hsl.js');

// set as red
let rR = 255;
let bB = 0;
let gG = 0;

// this special console will create colored output
//(`\x1b[38;2;${rR};${gG};${bB}m%s\x1b[0m`, myOutput);
let hex = hexConvertToRgb.hexToRgb(process.argv[3]);

let rgbOutput = 'hex: ' + rgbConvertToHex.rgbToHex(process.argv[3], process.argv[4], process.argv[5]) + ' , ' + 'hsl(' + rgbConvertToHsl.rgbToHsl(process.argv[3], process.argv[4], process.argv[5]) + ')';

if (process.argv[2] == 'hex') {
    console.log(`\x1b[38;2;${rR};${gG};${bB}m%s\x1b[0m`, 'rgb: ' + hex.r + ',' + hex.g + ',' + hex.b + ' , '  + hexConvertToHsl.hexToHSL(process.argv[3]));
} else if (process.argv[2] == 'rgb') {
    console.log(`\x1b[38;2;${rR};${gG};${bB}m%s\x1b[0m`, rgbOutput);
}