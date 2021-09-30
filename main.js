const prompt = require('prompt-sync')();

const color1 = prompt('Enter a color to combine: ');
const color2 = prompt('Enter another color to combine: ');

if (color1 === 'red' && color2 === 'blue') {
    console.log('Red and blue combine to purple. ');
}
if (color1 === 'red' && color2 === 'yellow') {
    console.log('Red and yellow combine to orange. ');
}
if (color1 === 'blue' && color2 === 'yellow') {
    console.log('Blue and yellow combine to green. ');
}
if (color1 === 'red' && color2 === 'blue') {
    console.log('Red and blue combine to purple. ');
}
else  (color1 === 'anything else'); {
    console.log('error');
}
