// PROBLEM STATEMENT :SantaClausable Interface

// EXAMPLE :
// var santa = {
//   sayHoHoHo: function() { console.log('Ho Ho Ho!') },
//   distributeGifts: function() { console.log('Gifts for all!'); },
//   goDownTheChimney: function() { console.log('*whoosh*'); }
// };

// var notSanta = {
//   sayHoHoHo: function() { console.log('Oink Oink!') }
//   // no distributeGifts() and no goDownTheChimney()
// };

// isSantaClausable(santa); // must return TRUE
// isSantaClausable(notSanta); // must return FALSE

//LINK :
// http://www.codewars.com/kata/santaclausable-interface
// SOLUTION:


function isSantaClausable(obj) {

  const condition1 = typeof obj['sayHoHoHo'] == 'function';
  const condition2 = typeof obj['distributeGifts'] == 'function';
  const condition3 = typeof obj['goDownTheChimney'] == 'function';


  return (condition1 === true && condition2 === true && condition3 === true);
}












