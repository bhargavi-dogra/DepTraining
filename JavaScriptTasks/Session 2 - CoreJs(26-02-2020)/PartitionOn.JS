/*PROBLEM STATEMENT :Partition On

http://www.codewars.com/kata/partition-on */

SOLUTION:

function partitionOn(pred, items) {


function partitionOn(pred, items) {

   var trueArray = items.filter((x) => pred(x)); 
   
   var falseArray = items.filter((x) => !pred(x));
   
   var item=falseArray.concat(trueArray)
   items.length=0;
   items.push(...item);
   
    return falseArray.length;
   
   }
 

}






//Aletnative Solution



function partitionOn(pred, items) {
 var len=items.length;
 var count=0;
 for(var i=0;i<len/2+1;i++)
 {
 if(pred(items[i]))
 {
items.splice(len,0,items[i]);
items.splice(i,1);
count++;
 }
 else
 {
items.splice(count,0);
count++;
 }
 }
 console.log(items);
 return count-1;
 

}