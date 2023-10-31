//Question 01: Do the below programs in anonymous function & IIFE
//a. Print odd numbers in an array

console.log("Question 1.a: Print odd numbers in an array")

//anonymous function

var myresult = [];

var anonymous = function(myarrar)
{

    for(i=0; i<myarrar.length; i++)

    if(myarrar[i]%2!==0)
    {
        myresult.push((myarrar[i]));
    }
    return myresult;

}

console.log(anonymous([101, 102, 103, 104, 111, 112, 999]))