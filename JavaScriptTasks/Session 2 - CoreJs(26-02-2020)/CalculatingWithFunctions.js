/* PROBLEM STATEMENT : Calculating with Functions
http://www.codewars.com/kata/calculating-with-functions  */


SOLUTION

function zero(fn) {
    if( typeof fn === 'function'){
            return fn(0);
        } else {
            return 0;
        }
    }
    function one(fn) {
    if( typeof fn === 'function'){
            return fn(1);
        } else {
            return 1;
        }
    }
    function two(fn) {
    if( typeof fn === 'function'){
            return fn(2);
        } else {
            return 2;
        }
    }
    function three(fn) {
    if( typeof fn === 'function'){
            return fn(3);
        } else {
            return 3;
        }
    }
    function four(fn) {
    if( typeof fn === 'function'){
            return fn(4);
        } else {
            return 4;
        }
    }
    function five(fn) {
    if( typeof fn === 'function'){
            return fn(5);
        } else {
            return 5;
        }
    }
    function six(fn) {
    if( typeof fn === 'function'){
            return fn(6);
        } else {
            return 6;
        }
    }
    function seven(fn) {
    if( typeof fn === 'function'){
            return fn(7);
        } else {
            return 7;
        }
    }
    function eight(fn) {
    if( typeof fn === 'function'){
            return fn(8);
        } else {
            return 8;
        }
    }
    function nine(fn) {
    if( typeof fn === 'function'){
            return fn(9);
        } else {
            return 9;
        }
    }
    
    function plus(parameter2) {
    
     var number2= parameter2;
         return function(number1){return number1+number2}
    
    }
    function minus(parameter2) {
    
     var number2= parameter2;
         return function(number1){return number1-number2}
    
    }
    function times(parameter2) {
    
     var number2=parameter2;
          return function(number1){return number1*number2}
    
    }
    function dividedBy(parameter2) {
     var number2= parameter2;
           return function(number1){return Math.floor(number1/number2)}
    
    }