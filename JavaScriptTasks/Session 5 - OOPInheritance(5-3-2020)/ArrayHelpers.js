// PROBLEM STATEMENT :Array Helpers

// http://www.codewars.com/kata/array-helpers
// SOLUTION:

// Example :
//var numbers = [1, 2, 3, 4, 5];
// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]
// TODO// TODO

Object.prototype.hasOwnProperty = function (property) {
  return this[property] !== undefined;
};
if (!Array.hasOwnProperty('square')) {
  Array.prototype.square = function () {
    return this.map(function (n) { return n * n; });
  }
}

if (!Array.hasOwnProperty('cube')) {
  Array.prototype.cube = function () {
    return this.map(function (n) { return n * n * n; });
  }
}

if (!Array.hasOwnProperty('average')) {
  Array.prototype.average = function (array) {
    let sum = 0, counter = this.length;

    sum = this.reduce(add);
    return sum / counter;
  }

}

if (!Array.hasOwnProperty('sum')) {
  Array.prototype.sum = function () {
    let sum = 0;
    sum = this.reduce(add);

    return sum;
  }
}

if (!Array.hasOwnProperty('even')) {
  Array.prototype.even = function () {
    let even = [];
    even = this.filter(checkEven);
    return even;
  }
}

if (!Array.hasOwnProperty('odd')) {
  Array.prototype.odd = function () {
    let odd = [];
    odd = this.filter(checkOdd);
    return odd;
  }
}

function add(total, num) {
  return total + num;
}


function numberReturn(n) {
  return n;
}

function checkOdd(n) {
  return n % 2 == 1;
}

function checkEven(n) {
  return n % 2 == 0;
}