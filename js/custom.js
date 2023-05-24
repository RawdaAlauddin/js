/*1. Write a JavaScript function to print the “Hello World” message*/


/* function x (){
document.writeln("Hello World!");

}
x(); */

/*2. Write a JavaScript function Returns whether a given year is a leap year, according to the rules of the Gregorian calendar
. A year is a leap year if it is (1) divisible by 4 but not 100, or else
 (2) is divisible by 400.*/



 /*function leapYear (year){
    if ((year% 4==0 && year% 100 !=0)||(year%400==0)){  
        document.writeln( "This is a leap Year");

     }
     else {
        document.writeln("This is NOT a leap Year")
     }
 }

let currentYear=prompt("write the number of the year");
leapYear(currentYear);*/


/*3. Define a function called multiplyFive which accepts a number and returns that number dividable by 5.*/

/*function multiplyFive (number){
if (number%5==0){
    document.writeln("accepted number")
}
else {
    document.writeln("NOT accepted number")
}
}

let currentNumber= +prompt("write the number here")
multiplyFive (currentNumber);*/


/*-----------------------------------------------------------------------------------*/


/* button==> onclick==> random number from 100to 1000*/



//var x = Math.floor(Math.random()*(maxNumber-minNumber))+minNumber



function getRandom(){
    var x= Math.floor(Math.random()*(1000-100))+100
    
    var currentSpan =document.getElementById("theNumber");

    currentSpan.innerText=x;


}


