//Repetition Practice Problems
const prompt=require('prompt-sync')();

//Program to take command line input n and print table of power of 2 less than or equal to 2^n
{
let userInput=prompt("Enter the value of n for generation of table of 2");
console.log("Entered value is: "+userInput);
let tableOfTwo=1;
let count=1;
while(tableOfTwo<=256 && count<=userInput){
console.log("%d X %d=",2,count,tableOfTwo);
tableOfTwo=tableOfTwo*2;
count++;
}
}

//Program to Find Magic Number
{
    let number = prompt("Enter the number  between 1 to 100 :");
    console.log(number);
    let mid = number/2;
    let start = 0;
    let end = 100;
    while (mid != number) {
        if (mid == number)
            console.log("Number is: " + mid);
        else if (mid > number) {
            end = mid;
            mid = Math.floor((start + end) / 2);
        }
        else if (mid < number) {
            start = mid;
            mid = Math.floor((start + end) / 2);
        }
    }
    console.log(mid);
}

//Program to Flip Coin till either Heads or Tails  wins 11 times
{
    const HEAD = 0;
    const TAIL = 1;
    let headCount = 0;
    let tailCount = 0;
    while (headCount != 11 && tailCount != 11) {
        let tossCoin = Math.floor(Math.random() * 10) % 2;
        switch (tossCoin) {
            case HEAD:
                headCount++;
                break;
            case TAIL:
                tailCount++;
                break;
        }
    }
    console.log("Head Count = " + headCount);
    console.log("Tail Count = " + tailCount);
}

//Program to track number of wins and number of bets made
{
    const BETS_LOST = 0;
    const BETS_WIN = 1;
    let balance = 100;
    let winCount = 0;
    let totalNoOfBets = 0;

    while (balance > 0 && balance < 200) {
        let bets = Math.floor(Math.random() * 10) % 2;
        switch (bets) {
            case BETS_LOST:
                balance--;
                break;
            case BETS_WIN:
                balance++;
                winCount++;
                break;
        }
    totalNoOfBets++;
    }
    console.log("Total bets = " + totalNoOfBets);
    console.log("Total wins = " + winCount);
    console.log("Final balance = " + balance);
}