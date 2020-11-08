//Selection Practice Problems with if and else

//Program to read 5 random three digit values and then find minimum and maximum value
let arrayOfNum=[];
//putting values in array
const LOWER_BOUND=100;
const UPPER_BOUND=999;
for(let i=0;i<5;i++){
    arrayOfNum[i]=LOWER_BOUND+Math.floor(Math.random()*((UPPER_BOUND-LOWER_BOUND)+1));
    console.log("Number "+i+": "+arrayOfNum[i]);
}
let max=arrayOfNum[0];
let min=arrayOfNum[0];

//code to get maximum number from five 3 digit random number
for(let index=0;index<5;index++){
    if(max<arrayOfNum[index]){
        max=arrayOfNum[index];
    }
    if(min>arrayOfNum[index]){
        min=arrayOfNum[index];
    }
}
console.log("maximum number: "+max);
console.log("minimum number: "+min);

//Program that takes day and  month and determines if it is in a given range
const prompt=require('prompt-sync')();
let userDay=prompt("Enter day");
console.log(`Entered date is ${userDay}`);
let userMonth=prompt("Enter Month");
console.log(`Entered month is ${userMonth}`);
if(((userDay>=20 && userDay<=31) && userMonth==3) || 
                    ((userDay>=1 && userDay<=30)&& userMonth==4)|| 
                    ((userDay>=1 && userDay<=31) && userMonth==5) ||
                    ((userDay>=1 && userDay<=20) && userMonth==6)) {
    console.log(true);
}
else{
    console.log(false);
}

//Program to check year is leap year or not
let userYear=prompt("Enter Year");
console.log(`Entered Year is ${userYear}`);
let checkLeapYear=(userYear%100===0)?(userYear%400===0):(userYear%4===0);
console.log(checkLeapYear);
if(checkLeapYear==true){
    console.log(userYear+" is leap year");
}
else{
    console.log(userYear+" Not a leap year");
}

//Program to stimulate coin flip
let coinFlip=Math.floor(Math.random()*10)%2;
if(coinFlip==0){
    console.log("It's a HEAD");
}
else{
    console.log("Its a TAIL");
}