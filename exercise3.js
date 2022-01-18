//Part 1. Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.
/*
var xValue = 5;
while (xValue > 0){
    xValue -= 0.5;
    console.log(xValue);
}

//Part 2. Print all the odd numbers between 1 - 100.
let oddNumbers = 0;
while (oddNumbers < 100){
    oddNumbers = oddNumbers + 1;
    if (oddNumbers % 2 != 0){
        console.log(oddNumbers);
    }
}

//Part 3. - Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]

let n = 0;

while(n < 10){
    n++;
    console.log("["+n+"]");
}
*/

//Part 4. Write a method with a while loop that computes the sum of first n positive integers: 
//sum = 1 + 2 + 3 + … + n
//Examples:
//n = 5 sum = 15
//n = 19 sum = 190

let n = 0;
let sum = 0;
let i = 19;
while(n < i){
    n++;
    sum = sum + n;
}
console.log("n = " + i + " sum =" + sum);