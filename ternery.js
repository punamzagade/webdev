
// Write a function to take temperature in degree celcius and return in degree kelvin
// Take the same function and add one more argument to it, "conversionUnit".Based on the 
// conversionUnit , return value of temperature in Celcius or Kelvin


// SAMPLE INPUT OUTPUT 2

// Input
// convertTemp(35, K)
// Output
// 273+35 = 308K



// SAMPLE INPUT OUTPUT1
// Input
// convertTemp(308, C)

// Output
// 308-273 = 35C


let K,C;
function convertTemp(temperatureValue, conversionUnit){
(conversionUnit=="K")?console.log((273+temperatureValue)+"K") :console.log((temperatureValue-273)+"C");
}
    convertTemp(35,"K");
    convertTemp(308,"C");
    