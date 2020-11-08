//Selection Practivce Problems with if else if and else
const prompt=require('prompt-sync')();

//Progarm to read single digit and write number in word
{
let userInput=prompt("Enter a single digit number");
console.log(`Entered digit is ${userInput}`);
if(userInput==0){
    console.log("Zero");
}else if(userInput==1){
    console.log("One");
}else if(userInput==2){
    console.log("two");
}else if(userInput==3){
    console.log("three");
}else if(userInput==4){
    console.log("four");
}else if(userInput==5){
    console.log("five");
}else if(userInput==6){
    console.log("six");
}else if(userInput==7){
    console.log("seven");
}else if(userInput==8){
    console.log("eight");
}else if(userInput==9){
    console.log("nine");
}else{
    console.log("Entered digit not in range 0-9");
}
}

//Program to display the weekday
{
let userDate=prompt("Enter the date mm/dd/yyyy");
console.log(`Entered date is ${userDate}`);
let date=new Date(userDate);
// the day of the week spelled out completely
if(date.getDay()==0){
    console.log("sunday");
}else if (date.getDay()==1){
    console.log("monday");
}else if (date.getDay()==2){
    console.log("tuesday");
}else if (date.getDay()==3){
    console.log("wednesday");
}else if (date.getDay()==4){
    console.log("thursday");
}else if (date.getDay()==5){
    console.log("friday");
}else if (date.getDay()==6){
    console.log("saturday");
}else{
    console.log(" give correct input")
}
}

//Program to read number and display unit, tens, hundered
{
let userNumber=prompt("Enter the number 1, 10, 100, 1000, 10000, 100000 ");
console.log(`Entered number is ${userNumber}`);
if(userNumber==1){
    console.log("unit");
}else if(userNumber==10){
    console.log("tens");
}else if(userNumber==100){
    console.log("hundered");
}else if (userNumber==1000){
    console.log("thousand");
}else if(userNumber==10000){
    console.log("tens of thousand")
}else if(userNumber==100000){
    console.log("lacs")
}else{
    console.log("Invalid Number")
}
}

//Program to take 3 numbers and do arithmetic operations and find the one that is minimum or maximum
{
let firstNumber=20;
console.log(`Entered number is ${firstNumber}`);
let secondNumber=10;
console.log(`Entered number is ${secondNumber}`);
let thirdNumber=40;
console.log(`Entered number is ${thirdNumber}`);
let arrayOfOperations=[];
arrayOfOperations[0]=firstNumber+(secondNumber*thirdNumber);
console.log(arrayOfOperations[0]);
arrayOfOperations[1]=(firstNumber%secondNumber)+thirdNumber;
console.log(arrayOfOperations[1]);
arrayOfOperations[2]=thirdNumber+(firstNumber/secondNumber);
console.log(arrayOfOperations[2]);
arrayOfOperations[3]=(firstNumber*secondNumber)+thirdNumber;
console.log(arrayOfOperations[3]);
//determining the maximum and minimum value of opeartions
 let maxValue=arrayOfOperations[0];
 let minValue=arrayOfOperations[0];
for(let index=0;index<4;index++){
    if(minValue>arrayOfOperations[index]){
        minValue=arrayOfOperations[index];
    }
    if(maxValue<arrayOfOperations[index]){
        maxValue=arrayOfOperations[index];
    }
}
console.log("maximum value : "+maxValue);
console.log("minimum value : "+minValue);
}