// PROBLEM STATEMENT :Closures and Scopes

// http://www.codewars.com/kata/closures-and-scopes/train/javascript 

// SOLUTION:

function createFunctions(n) {
    var callbacks = [];
  
    for (var i=0; i<n; i++) {
    let x = i;
      callbacks.push(function() {
        return x;
      });
    }
    
    return callbacks;
  }
