//1. loop over all elements in an array
// function takes in an array

function bubbleSort2(arr){
    
    //start at index zero, loop through each index
    //3. repeat 1&2 until all elements are sorted
    for(let i=0; i<arr.length; i++){
        // at the start of each loop, assume array is sorted
        let done = true;
        for(let j=0; j<arr.length; j++){
            if(arr[j]>arr[j+1]){
                //if we swap, then remember the array was not actually sorted
                done = false;
                //2. if adjacent elements are out of order, swap them
                // make a temp variable to store the value we will swap
                let temp = arr[j]
                // set current element to value of next element
                arr[j] = arr[j+1]
                // set next element to value of current element (as stored in temp)
                arr[j+1] = temp
            }
            console.log(`i: ${i}, j:${j}`)
        }
        if(done==true){
            // if the array is stored marked 'done' at the end of the loop, return the array
            return arr
        }
    }
    // return the original array, sorted
    return arr
}

module.exports = bubbleSort2