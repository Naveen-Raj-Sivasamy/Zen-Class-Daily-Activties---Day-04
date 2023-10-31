//Question 01: Do the below programs in anonymous function & IIFE
//a. Print odd numbers in an array

console.log("Question 1.a: Print odd numbers in an array")

//{1, 2, 3, 4, 5, 6, 7, 8}

var samplearray;
var oddnumbers = [];

function odd(samplearray)
{
    for(var i=0; i<samplearray.length; i++)

    if(samplearray[i]%2!==0)
    {
        oddnumbers.push(samplearray[i]);
    }
    return oddnumbers;
}
console.log(odd([11, 12, 13, 34, 75, 86, 79, 80, 99, 1001])); //In this function call, we have added the array rather than assigning in the starting line


//another type: 

var samplearray02;
var oddnumbers02 = [];

function odd02(samplearray02)
{
    for(var i=0; i<samplearray02.length; i++)

    if(samplearray02[i]%2!==0)
    {
        oddnumbers02.push(samplearray02[i]);
    }
    console.log(oddnumbers02)
}
odd02([1, 2, 3, 4, 5, 6, 7])