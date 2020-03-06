// PROBLEM STATEMENT :Partition On

// http://www.codewars.com/kata/a-function-within-a-function 

// SOLUTION:


var Cat = (function () {
  // ... your code here.
  var averageweight = 0;
  var count = 0;

  return function Cat(name, weight) {
    this.name = name;
    this.weight = weight;
    count++;
    this.averageWeight = function () {

      return averageweight = (averageweight + weight) / 2;

    };


  }());





  // Let's make a Cat constructor!
  // Let's make a Cat constructor!
  function Cat(name, weight) {

    if (name === undefined || weight === undefined) {
      throw new TypeError("Invalid");
    }
    Cat.Counter = 0;
    Cat.Sum = 0;
    if (Cat.Counter == 0) {
      Cat.Sum = weight;
      Cat.Counter++;
    }
    else {
      Cat.Sum += weight;
      Cat.Counter++;
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
        Cat.Sum -= weight;
        weight = newWeight;
        Cat.Sum += weight;
      },
      configurable: false
    });

    Object.defineProperty(Cat, 'averageWeight', {
      value: function () {
        return Cat.Sum / Cat.Counter;
      }
    });
}