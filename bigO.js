//Examples of Big O notation

//constant time O(1)
function getFirst(arr){
    return arr[0];
}

//linear time O(n)
function getSum(arr){
    let sum = 0;
    for(i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum;
}

//quadratic time example O(n^2)
//do not try this with a long array
function getSmaller(arr){
    for(i=0;i<arr.length;i++){
        for(j=0;j<i;j++){
            console.log(j)
        }
    }
}

test1=[null];
test2=[...Array(1000000)];

console.time('getFirst @ length 1')
getFirst(test1)
console.timeEnd('getFirst @ length 1')

console.time('getFirst @ length 1 million')
getFirst(test2)
console.timeEnd('getFirst @ length 1 million')

console.time('getSum @ length 1');
getSum(test1);
console.timeEnd('getSum @ length 1');

console.time('getSum @ length 1 million');
getSum(test2);
console.timeEnd('getSum @ length 1 million');