
//Define a function named sumArray
function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0); //Add the current number to the sum and return the updated sum
}
// Call the sumArray function
console.log(sumArray([1, 2, 3, 4, 5]));

//I run it on the terminal, node sumArray.js
//the output is 15