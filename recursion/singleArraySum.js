//write a non-recursive function that sums all items in an array of integers
//the array will not contain nested arrays of integers

//Example:
let arr1 = [-9, 2, 3, -5, 20]; // => 11
let arr2 = [1,2,[3,4,[5]],6]; // => 21

function singleArraySum(arr){
    //accumulator variable starts @ 0
    let total = 0;
    //loop a number of times equal to the array length
    for(i=0;i<arr.length;i++){
        //add the value of the current array index to total
        total += arr[i];
    }
    //return the sum total of array elements
    return total
}

//this works
let test1 = singleArraySum(arr1);
console.log(test1)

//this fails - we need a recursive function
let test2 = singleArraySum(arr2);
console.log(test2)