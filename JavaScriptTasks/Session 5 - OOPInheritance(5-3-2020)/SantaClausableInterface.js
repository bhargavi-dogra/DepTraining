// PROBLEM STATEMENT :SantaClausable Interface

// http://www.codewars.com/kata/santaClausable-interface
// SOLUTION:

  const santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};


function isSantaClausable(obj) {
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
}