// PROBLEM STATEMENT :Array Helpers

// http://www.codewars.com/kata/array-helpers
// SOLUTION:

  // TODO
//var numbers = [1, 2, 3, 4, 5];
Array.prototype.square = function(){
return this.map(function(n){ return n*n;});
 }
 
 Array.prototype.cube = function(){
return this.map(function(n){ return n*n*n;});
 }
 
 Array.prototype.average = function(array){
 let sum = 0 ,counter = 0 ;
 this.forEach(function(n){ 
sum +=n;
counter++ ;
});

return sum/counter;
 }
 
 
 Array.prototype.sum = function(){
 let sum = 0  ;
 this.forEach(function(n){ 
sum +=n;
});

return sum;
 }
 
 
 Array.prototype.even = function(){
 let even =[];
 this.forEach(function(n){ 
if(n%2 == 0)
{
even.push(n);
}
});

return even;
 }
 
  Array.prototype.odd = function(){
 let odd =[];
 this.forEach(function(n){ 
if(n%2 == 1)
{
odd.push(n);
}
});

return odd;
 }
 
 
 