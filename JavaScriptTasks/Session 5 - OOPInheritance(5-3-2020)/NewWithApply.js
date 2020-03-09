// PROBLEM STATEMENT :new with apply

// http://www.codewars.com/kata/new-with-apply
// SOLUTION:

  function construct(Greeting, arguments) {
//console.log(arguments);
var name = arguments;

return Object.assign({},Greeting,{
sayHello : function() {
  return "Hello " +name;
},
sayBye : function() {
  return "Bye " + name;
}
});
}
var Greeting = {};
var greeting = construct(Greeting,'john');

console.log(greeting.sayHello());

