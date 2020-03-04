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
let middleIndex=Math.floor(stringLength/2);
if(middleIndex==0)
{
return s.substring(0);
}
else if(stringLength % 2 === 0)
{
return s.substring(middleIndex-1, middleIndex+1)
}
else if(stringLength % 2 === 1)
{
return  s.substring(middleIndex, middleIndex+1)
}

// if(stringLength==1||stringLength==2)
// return s;
// else{
// var subString=s.substring(1,stringLength-1);
// return getMiddleString(subString,stringLength-2);
// }
}