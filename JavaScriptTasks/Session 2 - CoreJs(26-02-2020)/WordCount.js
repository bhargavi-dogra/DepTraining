/* PROBLEM STATEMENT : Word Count

http://www.codewars.com/kata/word-count  */

SOLUTION

function countWords(str) {
 var l;
 str=str.trim();
 if(str.length===0)
 {
 l=0;
 }
else{

str = str.replace(/\s{2,}/g,' ');//double spaces
str = str.replace( / +(?= )/g, ' ')   ;//tabs
str = str.replace(/\s+/g, ' ');//single spaces
 var array = str.split(" ");
 var l=array.length;
}
 return l;
}