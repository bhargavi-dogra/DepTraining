// PROBLEM STATEMENT :Partition On

// http://www.codewars.com/kata/a-function-within-a-function 

// SOLUTION:

function always (n) {

    var numberToReturn = n;
     
     return function(){ return numberToReturn;}
    
    
    }
