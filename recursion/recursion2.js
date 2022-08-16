// Write a function, countVowels, that accepts a string as an argument and returns the number of vowels in that string.
// Use recursion.

//countVowels('Four score and seven years'); // => 9

function countVowels(strArray){
    let totalVowels =0
    let strSentence = []
    strSentence = strArray
    if(strArray.length<0){
        return 0
    } else {
        let strLetter = strArray.shift();
        if(strLetter.toUpperCase() == 'A' || strLetter.toUpperCase() == 'E' || strLetter.toUpperCase() == 'I' || strLetter.toUpperCase() == 'O' || strLetter.toUpperCase() == 'U'){
            return totalVowels += 1
        }
        console.log(strLetter)
        countVowels(strArray)
    }
}

console.log("total vowels: ", countVowels('Four'))
