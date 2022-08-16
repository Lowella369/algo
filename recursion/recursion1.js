// Write a function, sumNums, that takes a number, num, as an argument and returns the sum of all the numbers between 1 and num.
// You can assume that num will be greater than 1. Use recursion.

// sumNums(3); // => 6 (3 + 2 + 1)

function sumNums(num){
    let sum =0
    console.log(num)
    if(num<=1){
        return num
    } else{
        sum = num + sumNums(num-1)
    }
    return sum
}

console.log("Total: ", sumNums(3))

