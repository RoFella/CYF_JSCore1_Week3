/*
    Sometimes when using loops, we'll want to execute the body of the loop at least once. 
    We can make sure this happens by using a do-while loop.
        - If the condition in a while loop is initially false, the body of the loop will never execute
        - But in a do-while loop, because the condition is checked after the body, 
          we know that it will always execute at least once
    
    Using a do-while loop, write a function which returns the sum of the first n even numbers (starting from 0)
*/

function getEvenNumbers(n) {
    let result = [];
    let i = 0;
    let num = 0;
    
    while (i < n) {
        result.push(num);
        i++;
        num+=2;
    }
    return result;
}

function getSumOfNumbers(n) {
    if (n === 0) {
        return 0;
    }
    
    let evenNumbers = getEvenNumbers(n);
    let result = 0;
    evenNumbers.forEach(number => {
        result += number;
    });

    return result;
}

console.log(getSumOfNumbers(3)); // should output 6
console.log(getSumOfNumbers(0)); // should output 0
console.log(getSumOfNumbers(10)); // should output 90

// the given number 6
// contains even nubers: 0, 2, 4
// which make sum as 0 + 2 + 4 = 6 
