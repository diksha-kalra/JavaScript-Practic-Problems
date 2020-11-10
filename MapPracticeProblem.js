//Map Practice Problems

//Program to store dice value and count into map
{
let rolls=new Map();
let sortedMap=new Map();
let diceNumber;
//initializing map
for(let i=1;i<7;i++){
    rolls.set(i,0);
}

do{
    diceNumber=Math.floor(Math.random()*6)+1;
    rolls.set(diceNumber,rolls.get(diceNumber)+1);
}while(rolls.get(diceNumber)!=10);
//Map Traversal
console.log("Printing roll map")
for(let entry of rolls){
    console.log(entry);
}
//sorted Map
console.log("sorted entries",[...rolls.entries()].sort((a,b)=>a[1]-b[1]));
console.log("Dice Number with Max counts",[...rolls.entries()].reduce((a,b)=> a[1]>b[1]?a:b));
console.log("Dice Number with Min counts",[...rolls.entries()].reduce((a,b)=> a[1]<b[1]?a:b));
}

//Program to generate birth month of 50 individuals
{
let birthMonthMap=new Map();
//initializing Map
for(let i=1;i<=12;i++){
    birthMonthMap.set(i,0);
}
//Generating Birth Month of 50 individuals between year 92 and 93"
for(let person=0;person<50;person++){
    birthMonth=Math.floor(Math.random()*12)+1;
    birthMonthMap.set(birthMonth,birthMonthMap.get(birthMonth)+1);
}
console.log("Printing birthMonth Map of 50 Individuals")
for(let entry of birthMonthMap){
    console.log(entry);
}
}