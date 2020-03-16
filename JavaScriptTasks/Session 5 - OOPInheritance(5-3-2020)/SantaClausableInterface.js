// PROBLEM STATEMENT :SantaClausable Interface

// http://www.codewars.com/kata/santaclausable-interface
// SOLUTION:

 
function isSantaClausable(obj) {

  const condition1 =  typeof obj['sayHoHoHo'] == 'function';
   const condition2 =  typeof obj['distributeGifts'] == 'function';
    const condition3 = typeof obj['goDownTheChimney'] == 'function';

  
  if((condition1 === true && condition2 === true && condition3 ===true))
  {
  return true;
  }
  return false;
}
















/*function isSantaClausable(obj) {
  // TODO
  const condition1 = obj.hasOwnProperty('sayHoHoHo');
   const condition2 = obj.hasOwnProperty('distributeGifts');
    const condition3 = obj.hasOwnProperty('goDownTheChimney');
    const obj2 = Object.getPrototypeOf(obj);
  const condition4 = obj2.isPrototypeOf(this.santa);
  const condition5 = obj instanceof Object;
  
  if((condition1 === true && condition2 === true && condition3 ===true)||(condition4 == true && condition5 === true))
  {
  return true;
  }
  return false;
} */