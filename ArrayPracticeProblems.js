//Array Prcatice Problems

//Generate 10 random 3 digits number store in an array and find the 2nd largest and 2nd smallest element
let arrayOfNum=[];
//putting values in array
const LOWER_BOUND=100;
const UPPER_BOUND=999;
for(let i=0;i<10;i++){
    arrayOfNum[i]=LOWER_BOUND+Math.floor(Math.random()*((UPPER_BOUND-LOWER_BOUND)+1));
    console.log("Number "+i+": "+arrayOfNum[i]);
}
let largest=arrayOfNum[0];
let secondLargest=arrayOfNum[0];
let minimum=arrayOfNum[0];
let secondMinimum=arrayOfNum[0];

//code to get 2nd maximum and minimum number from ten 3 digit random number
for(let i=0;i<arrayOfNum.length;i++){
    if(arrayOfNum[i]>largest){
        secondLargest=largest;
        largest=arrayOfNum[i];
    }else if(arrayOfNum[i]>secondLargest){
        secondLargest=arrayOfNum[i];
    }
    if(arrayOfNum[i]<minimum){
        secondMinimum=minimum;
        minimum=arrayOfNum[i];
    }else if(arrayOfNum[i]<secondMinimum){
        secondMinimum=arrayOfNum[i];
    }
    }
    
console.log("Second Largest number: "+secondLargest);
console.log("Second minimum number: "+secondMinimum);

//Program to sort the array and then find second minimum and second maximum number
let sortedArray=arrayOfNum.sort();
console.log("Second Largest number: "+sortedArray[sortedArray.length-2]);
console.log("Second minimum number: "+sortedArray[1]);

//Program to compute factors of a number using factorization
{   
    const prompt=require('prompt-sync')();
    let num = prompt("Enter the number to compute prime factors of a number :");
    let primeFactorsArray=[];
    for(let i = 2; i< num; i++) {
        while(num%i == 0) {
            primeFactorsArray.push(i);
           num = num/i;
        }
     }
     if(num>2) {
        primeFactorsArray.push(num);
     }
//displaying prime factors
for(let index=0; index<primeFactorsArray.length; index++){
    console.log(primeFactorsArray[index]);
}
}

//Program to show sum of three integers add to zero
function sumOfIntegersAddToZero(arrayOfIntegers){
    let sortedIntegerArray=[];
    let firstElement, startIndex, endIndex, sum;
    sortedIntegerArray=arrayOfIntegers.sort();
    for(let i=0;i<sortedIntegerArray.length;i++){
        firstElement=sortedIntegerArray[i];
        startIndex=i+1;
        endIndex=sortedIntegerArray.length-1;
            while(startIndex<endIndex){
            sum=sortedIntegerArray[startIndex]+sortedIntegerArray[endIndex];
            if(firstElement+sum==0){
                console.log("Found Three Elements: "+firstElement+", "+sortedIntegerArray[startIndex]+", "+sortedIntegerArray[endIndex]);
                startIndex++;
                endIndex--;
            }else if(firstElement+sum<0){
                startIndex++;
            }else{
                endIndex--;
            }
        }
    }
}

let arrayOfIntegers=[1,2,4,-3,-1,5,6];
sumOfIntegersAddToZero(arrayOfIntegers);

//Program to Determine repeated digits and storing them in an array
{
let repeatedArray=[];
function range(start, end){
    for(let i=start; i<end;++i){
        getRepeatedDigits(i);
    }
}
function getRepeatedDigits(number){
    let originalNumber=number;
    if(number%10==(Math.floor(number/10)%10)&&number%10!=0){
        repeatedArray.push(originalNumber);
    }
}
let start=0;
let end=100;
range(start,end);
for(let i=0;i<repeatedArray.length;i++){
    console.log(repeatedArray[i]);
}
}