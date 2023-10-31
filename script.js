//Question 01: Do the below programs in anonymous function & IIFE
//a. Print odd numbers in an array

console.log("Question 1.a: Print odd numbers in an array")

//{1, 2, 3, 4, 5, 6, 7, 8}

var samplearray = [1, 2, 3, 4, 5, 6, 7, 8];
var oddnumbers = [];

function odd(samplearray)
{
    for(var i=0; i<samplearray.length; i++)

    if(samplearray[i]%2!==0)
    {
        oddnumbers.push(oddnumbers[i])
    }
    return oddnumbers;
}
console.log(odd.oddnumbers);