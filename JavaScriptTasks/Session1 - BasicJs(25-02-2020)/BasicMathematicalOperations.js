/* PROBLEM STATEMENT - Basic Mathematical Operations
 Link : http://www.codewars.com/kata/basic-mathematical-operations 
*/



SOLUTION

function basicOp(operation, value1, value2) {
  var result;
  switch (operation) {
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case '*':
      result = value1 * value2;
      break;
    case '/':
      result = value1 / value2;
      break;
    default:
      break;
  }
  return result;
}