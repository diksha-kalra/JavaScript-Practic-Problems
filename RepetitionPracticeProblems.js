//Repetition Practice Problems
const prompt=require('prompt-sync')();
//Program to take command line input n and print table of power of 2 less than or equal to 2^n
{
let userInput=prompt("Enter the value of n for generation of table of 2");
console.log("Entered value is: "+userInput);
for(let index=1;index<=userInput;index++){
    console.log("%d X %d =",2,index,2*index);
}
}

//Program to take command line input n and print nth harmonic number
{
let inputNumber=prompt("Enter the value of n for generation of harmonic number series");
let harmonicSeries="1";
for(let i=2;i<=inputNumber;i++){
    harmonicSeries+="+(1/"+i+")";
}
console.log(harmonicSeries);
}

//Program to check if a number is prime or not
{
let number=prompt("Enter the number to determine prime or not");
let flag=0;
if(number==0||number==1){
    console.log(number+" not a prime number");
}
else{
    for(let i=2;i<=number/2;i++){
        if(number%i==0){
            console.log(number+" not a prime number");
            flag=1;
            break;
        }
    }
    if(flag==0){
        console.log(number+" is a prime number");
    }
}
}

//Program to generate prime numbers in a given range
{
let startValue=prompt("Enter the starting number: ");
let endValue=prompt("Enter the ending number: ");
console.log("Prime numbers between "+startValue+" and "+endValue+" are: ");
let count;
for(let startIndex = startValue ; startIndex <= endValue ; startIndex++){
			count = 0;
			for(let endIndex = 1 ; endIndex <= startIndex ; endIndex++)	{
				if(startIndex % endIndex == 0)
					count = count+1;
			}
			if(count == 2)
                console.log(startIndex);
}
}

//Program to Compute Factorial of a Number
{
function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return (n*factorial(n-1));
    }
}
let factOfNumber=prompt("Enter the number to compute factorial ");
let fact=1;
fact=factorial(factOfNumber);
console.log("Factorial of Number "+factOfNumber+" is "+fact);
}

//Program to compute factors of a number using factorization
{
    let num = prompt("Enter the number to compute prime factors of a number :");
    console.log("Prime Factors are:");
    for(let i = 2; i< num; i++) {
        while(num%i == 0) {
           console.log(i+" ");
           num = num/i;
        }
     }
     if(num>2) {
        console.log(num);
     }
}