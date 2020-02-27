/* PROBLEM STATEMENT - Get the Middle Character

http://www.codewars.com/kata/get-the-middle-character   */




SOLUTION

function getMiddle(s)
{
  //Code goes here!
  
  var str=getMiddleString(s,s.length);
  return str;
}

function  getMiddleString( s, l)
{
if(l==1||l==2)
return s;
else{
var str=s.substring(1,l-1);
return getMiddleString(str,l-2);
}
}