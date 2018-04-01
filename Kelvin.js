//This is a constant variable in Kelvin
const kelvin = 0

//This is another let variable in Celcius based on the Kelvin: Kelvin - 273

const Celcius = kelvin - 273;

//This is another let variable Fahrenheit based on this computation: ahrenheit = Celsius * (9/5) + 32

let Fahrenheit = Celcius * (9/5) + 32;

// We have rounded down the Fahrenheit number
console.log(Math.floor(21 * (9/5) + 32));
Fahrenheit = Math.floor(Fahrenheit);
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit`)
