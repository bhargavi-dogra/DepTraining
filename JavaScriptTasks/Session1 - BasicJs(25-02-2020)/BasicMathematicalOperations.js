/* PROBLEM STATEMENT - Basic Mathematical Operations
 Link : http://www.codewars.com/kata/basic-mathematical-operations 
*/



SOLUTION

function basicOp(operation, value1, value2)
{
  var v ;
  switch(operation)
  {
    case '+':
      v=value1 +value2;
      break;
    case '-':
      v=value1-value2;
      break;
    case '*':
      v=value1*value2;
      break;
    case '/':
      v=value1/value2;
      break;
    default:
      break;
  } 
   return v;
}