//Question 01: Do the below programs in anonymous function & IIFE
//a. Print odd numbers in an array

console.log("Question 1.a: Print odd numbers in an array")

//anonymous function

var myresult = [];

var anonymous = function(myarrar)
//I am accessing the anonymous function using the variable anonymous here
{

    for(i=0; i<myarrar.length; i++)

    if(myarrar[i]%2!==0)
    {
        myresult.push((myarrar[i]));
    }
    return myresult;

}

console.log(anonymous([101, 102, 103, 104, 111, 112, 999]))

//IIFE function


var myresult01 = [];

(function (samplearray01)
{

    for(var i=0; i<samplearray01.length; i++)

    if(samplearray01[i]%2!==0)
    {
        myresult01.push(samplearray01[i]);
    }

console.log(myresult01);

})([1, 23, 45, 46, 98, 99, 898, 5, 66, 90, 13]);