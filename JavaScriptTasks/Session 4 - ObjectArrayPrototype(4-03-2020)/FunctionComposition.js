// PROBLEM STATEMENT :Function Composition

// http://www.codewars.com/kata/function-composition

// SOLUTION:

  function compose(add1,id ,n) {
  // Compose the two functions here!
  function add1(n){ return n+1; }
 function id(n){ return n; } 
 
  return function(n){ 
  var  initialResult = id(n);
  var finalResult = add1(initialResult);
  return finalResult;
  };
}




//Predefined Solution

const compose = (...fns) => input => fns.reduceRight((v, f) => f(v), input);