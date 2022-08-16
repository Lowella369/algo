// Write a function, reverseArray, that accepts an array as an argument and returns a reversed copy of that array.
// Use recursion. Don’t mutate the original array.

function reverseArray(arr) {
    var newarray = [... arr]
    if(newarray.length == 0)
    {
       return 0;
    }
    
    let arrNum = newarray.pop();
    let revArray = []
    revArray.push(arrNum)
    reverseArray(newarray)
    return revArray;
    }

let arr = [1,2,3,4];
let reversedArr = reverseArray(arr);

console.log(reversedArr) // [4,3,2,1]
console.log(arr) // [1,2,3,4]