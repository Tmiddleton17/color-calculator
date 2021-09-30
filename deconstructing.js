const prompt = require('prompt-sync')

const selection = Number(prompt('Type [1] to combine colors or type [2] to deconstruct'));

const purple = 'deconstructs to red + blue';
const orange = 'deconstructs to red + yellow';
const green = 'deconstructs to blue + yeelow';

if (selection === 2) {
    console.log('You chose to deconstruct. ');
    
    const deconstructColor = prompt('what is the color you want to deconstruct')

    if (deconstructColor === 'purple') {
       console.log(purple);
    }  else if (deconstructColor === 'orange') {
       console.log(orange);
    }  else if (deconstructColor === 'green') {
       console.log(green);
    } else {
        console.log('error');
    }
}