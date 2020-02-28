/* PROBLEM STATEMENT - Get the Middle Character

http://www.codewars.com/kata/get-the-middle-character   */




SOLUTION

function getMiddle(s)
{
 
  var resultString=getMiddleString(s,s.length);
  return resultString;
}

function  getMiddleString( s, stringLength)
{
if(stringLength==1||stringLength==2)
return s;
else{
var subString=s.substring(1,stringLength-1);
return getMiddleString(subString,stringLength-2);
}
}