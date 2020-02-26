PROBLEM STATEMENT : Word Count
Can you realize a function that returns word count from a given string?

You have to ensure that spaces in string is a whitespace for real.

What we want and finish of work:

countWords("Hello"); // returns 1 as int
countWords("Hello, World!") // returns 2
countWords("No results for search term `s`") // returns 6
countWords(" Hello") // returns 1
// ... and so on
What kind of tests we got for your code:

Function have to count words, but not spaces, so be sure that it does right.
Empty string has no words.
String with spaces around should be trimmed.
Non-whitespace (ex. breakspace, unicode chars) should be assumed as delimiter
Be sure that words with chars like -, ', ` are counted right.

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