console.log(`\n---Question3---`);

/*

Add Up the Numbers
Prompt:

Write a function that takes in a number. Return the sum of all the numbers from the first number passed in to the second number you passed in. For example, if we pass in 1 and 4, we'd return 1 + 2 + 3 + 4 = 10.

Example clarifying questions:

Can the number passed in be negative? No.
Can the number be zero? No.
Will it always be a number? Yes.
Example test cases:

addItUp(1, 4) -> 10
addItUp(2, 6) -> 20
addItUp(10,11) -> 21
*/

const addItUp = (num1,num2) => {

    let answer = 0;
    for(let i = num1; i <= num2; i++){
        answer += i;
    }
    return answer;
};

console.log(`addItUp(1, 4) -> 10`);
console.log(addItUp(1,4));
console.log(`addItUp(2, 6) -> 20`);
console.log(addItUp(2,6));
console.log(`addItUp(10,11) -> 21`);
console.log(addItUp(10,11));