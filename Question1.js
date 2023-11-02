/* Move odd numbers back
Prompt

Write a function that takes in an array of numbers and either the word 'odd' or 'even', and then returns a new array containing the same numbers, in the same order, but with all odd or even numbers (based on the word passed in) moved to the end of the array.

Clarifications:

Don't modify the input array!
Assume the array will only contain numbers
If the array is empty, should return an empty array
Numbers moved to the end should be in the order they originally appeared
Example test cases:

[ 0, 6, 3, 1, 4 ], even -> [ 3, 1, 0, 6, 4 ]
[ 0, 6, 3, 1, 4 ], odd -> [ 0, 6, 4, 3, 1 ]
[ ], odd -> [ ]
*/
console.log(`---Question 1---`);
function moveBack (numArray, oddOrEven){
    let retArray = [];
    let evens = []
    let odds = [];

    if (numArray.length == 0 || (oddOrEven != 'odd' && oddOrEven !='even')){
        console.log('invalid');
        return retArray;
    }
    
    numArray.map((num) => num % 2 == 0 ? evens.push(num) : odds.push(num));
    oddOrEven == 'even' ? retArray = odds.concat(evens) : retArray = evens.concat(odds);
    return retArray;
}
console.log(`[ 0, 6, 3, 1, 4 ], even -> [ 3, 1, 0, 6, 4 ]`);
console.log(moveBack([ 0, 6, 3, 1, 4 ], 'even'));
console.log(`[ 0, 6, 3, 1, 4 ], odd -> [ 0, 6, 4, 3, 1 ]`);
console.log(moveBack([ 0, 6, 3, 1, 4 ], 'odd'));