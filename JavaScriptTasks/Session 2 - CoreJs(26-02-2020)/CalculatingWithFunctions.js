/* PROBLEM STATEMENT : Calculating with Functions
http://www.codewars.com/kata/calculating-with-functions  */


SOLUTION

function zero() {  
    if(arguments.length===0){
        return 0;
    } else {
        return arguments[0](0);
    }
}
function one() { 
     if(arguments.length===0){
         return 1; 
     }else {
         return arguments[0](1);
        }
    }
function two() { 
     if(arguments.length===0)
     {
         return 2; 
     }else {
         return arguments[0](2);
        }
    }

function three() { 
    if(arguments.length===0)
    {
        return 3; 
    }else{

    return arguments[0](3);
}
}

function four() { 
     if(arguments.length===0)
     {
         return 4;
      } else{
           return arguments[0](4);
        }
    }
function five() {   
    if(arguments.length===0)
    {
        return 5;
     } else{

      return arguments[0](5);
    }
}
function six() {  
     if(arguments.length===0)
     {
         return 6;
      } else{
           return arguments[0](6);
        }
    }
function seven() {  
     if(arguments.length===0)
     {
         return 7;
      } else{

       return arguments[0](7);
    }
}
function eight() { 
      if(arguments.length===0)
      {
          return 8;
       } else{

       return arguments[0](8);
    }
}
function nine() {  
     if(arguments.length===0)
     {
         return 9; 
     }else{

      return arguments[0](9);
    }
}

function plus() { 
     var number2= arguments[0];
     return function(number1){return number1+number2}
    }
function minus() {   
     var number2= arguments[0];
     return function(number1){return number1-number2}
    }
function times() { 
      var number2= arguments[0];
      return function(number1){return number1*number2}
    }
function dividedBy() { 
       var number2= arguments[0];
       return function(number1){return Math.floor(number1/number2)}
    }