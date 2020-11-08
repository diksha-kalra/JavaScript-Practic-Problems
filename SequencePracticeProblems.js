//Sequence Practice Problems

//'generate single digit random number
let randomDigit=Math.floor(Math.random()*10)%10;
console.log("Single Digit Random Number:"+randomDigit);

//using random to get dice number between 1 to 6
let diceNumber=Math.floor(Math.random()*6)+1;
console.log("Dice Number between 1 to 6: "+diceNumber);

//adding two random dice numbers and printing the result
let firstDiceNumber=Math.floor(Math.random()*6)+1;
let secondDiceNumber=Math.floor(Math.random()*6)+1;
let sumOfDiceNumbers=firstDiceNumber+secondDiceNumber;
console.log("Sum Of Random Dice Numbers: "+sumOfDiceNumbers);

//generating five two digit random numbers and determining sum and average value
function randomNumberGenerator(){
    return (10+ Math.floor(Math.random()*(99-10+1)));
}
let sum=0;
let average=0;
for(let count=0;count<5;count++){
    let number=randomNumberGenerator();
    console.log(number)
    sum+=number;
}
console.log("Sum of 2 digit random no.: "+sum);
average=sum/5;
console.log("Average: "+average);

//Unit conversion 
let meters=42;
let metersToFeet=meters/12;
console.log("meters: "+meters+"m"+" metres to feet: "+metersToFeet+"ft");

//rectangular plot in meters
let plotLengthInFeet=60;
let plotBreadthInFeet=60;
let plotLengthInMeters=plotLengthInFeet*12;
let plotBreadthInMeters=plotBreadthInFeet*12;
console.log("Plot size in meters: "+plotLengthInMeters+"m"+" X "+plotBreadthInMeters+"m");

//calculating area of 25 plots in acres
const NUM_OF_PLOTS=25;
let plotArea=NUM_OF_PLOTS*plotLengthInMeters*plotBreadthInMeters;
console.log("Area of 25 Plots in meters: "+plotArea+"m^2");
console.log("Area of 25 plots in Acres: "+plotArea/4047+" acre");
