const prompt = require('prompt-sync')();

const choice = Number(prompt('Enter [1] to combine colors or [2] to deconstruct color'));

if (choice === 1) {
    const color1 = prompt('Please enter [red], [blue], or [yellow]: ');
    const color2 = prompt('Please enter [red], [blue], or [yellow]: ');

    if (color1 === 'red' && color2 === 'blue') {
        console.log('purple');
    }
    if (color1 === 'blue' && color2 === 'red') {
        console.log('purple');
    }
    if (color1 === 'red' && color2 === 'yellow') {
        console.log('orange');
    }
    if (color1 === 'yellow' && color2 === 'red') {
        console.log('orange');
    }
    if (color1 === 'blue' && color2 === 'yellow') {
        console.log('gree');
    }
    if (color1 === 'yellow' && color2 === 'blue') {
        console.log('green');
    }
    
    if (
      (color1 === 'red' && color2 === 'red') ||
      (color1 === 'yellow' && color2 === 'yellow') ||
      (color1 === 'blue' && color2 === 'blue') ||
      )  {
      console.log('error');
    }
}