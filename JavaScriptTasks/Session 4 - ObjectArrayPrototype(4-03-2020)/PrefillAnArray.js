// PROBLEM STATEMENT :Partition On

// http://www.codewars.com/kata/a-function-within-a-function 

// SOLUTION:

  let Counter = 0 ;
 let Sum = 0 ;
 
 function Cat(name, weight) {

    if (typeof name === 'undefined' || typeof weight === 'undefined') {
      throw new TypeError("Invalid");
    }

    if (Counter === 0) {
      Sum = weight;
      Counter++;
    }
    else {
      Sum += weight;
      Counter++;
    }

    
    Object.defineProperty(this, 'name', {
      get() { return name; },
      set(newName) {
        name = newName;
      },
      configurable: false
    });
    Object.defineProperty(this, 'weight', {
      get() { return weight; },
      set(newWeight) {
        Sum -= weight;
        weight = newWeight;
        Sum += weight;
      },
      configurable: false
    });
}

Cat.averageWeight = function(){  return Sum / Counter; }