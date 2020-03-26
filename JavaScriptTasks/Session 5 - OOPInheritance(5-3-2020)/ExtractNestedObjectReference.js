// PROBLEM STATEMENT :Extract Nested Object Reference

//TODO
// You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.

// var obj = {
//   person: {
//     name: 'joe',
//     history: {
//       hometown: 'bratislava',
//       bio: {
//         funFact: 'I like fishing.'
//       }
//     }
//   }
// };

// obj.hash('person.name'); // 'joe'
// obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
// obj.hash('person.history.homeStreet'); // undefined
// obj.hash('person.animal.pet.needNoseAntEater'); // und

//LINK:
// http://www.codewars.com/kata/extract-nested-object-reference

// SOLUTION:



Object.prototype.hash = function (string, obj) {
  let parts = string.split(".");
  let lengthofparts = parts.length;
  let i;
  let property = obj || this;

  for (i = 0; i < lengthofparts; i++) {
    if (property == undefined || parts == undefined) {
      return undefined;
    }
    property = property[parts[i]];

  }


  return property;
}














