console.log(`\n---Question2---`);
/* 

Word Counter
Prompt:

Write a function that takes in two arguments, an array of strings and a string. The function should return the number of times the string is found in the array.

Example clarifying questions:

Will they always be array of strings and a string? Yes.
May I use built in methods like .toLowercase()? Yes
Will the array always have strings? It may be empty, if it is, return 0.
Does capitalization matter? No. You may assume all characters are lowercase.
Example test cases:

["apple", "pizza", "orange", "apple", "sour apple"], "apple" -> 2
["apple", "pizza", "orange", "apple", "sour apple"], "pizza" -> 1
["apple", "pizza", "orange", "apple", "sour apple"], "sour" -> 0
["sour", "soiree", "Sour", "sour", "sour"], "sour" -> 3
[], "banana" -> 0
Interviewer Note: To complicate the problem, allow letters to match even if one is capitalized. Example:

["sour", "soiree", "Sour", "sour", "sour"], "sour" -> 4
*/

const wordCounter = (strarray, str) =>{
    let counter = 0;
    let lowerStr = str.toLowerCase();
    for (let item of strarray){
        let lowerItem = item.toLowerCase();
        if (lowerItem == lowerStr){
            counter += 1;
        }
    }
    return counter;
}

console.log(`["apple", "pizza", "orange", "apple", "sour apple"], "apple" -> 2`);
console.log(wordCounter(["apple", "pizza", "orange", "apple", "sour apple"], "apple"));
console.log(`["apple", "pizza", "orange", "apple", "sour apple"], "pizza" -> 1`);
console.log(wordCounter(["apple", "pizza", "orange", "apple", "sour apple"], "pizza"));
console.log(`["apple", "pizza", "orange", "apple", "sour apple"], "sour" -> 0`);
console.log(wordCounter(["apple", "pizza", "orange", "apple", "sour apple"], "sour"));
console.log(`["sour", "soiree", "Sour", "sour", "sour"], "apple" -> 4`);
console.log(wordCounter(["sour", "soiree", "Sour", "sour", "sour"], "sour"));
console.log(`[], "banana" -> 0`);
console.log(wordCounter([], "banana"));
