/*PROBLEM STATEMENT :Partition On

http://www.codewars.com/kata/partition-on */

SOLUTION:

function partitionOn(pred, items) {
//  var first=[],second=[];
//  var arrayLength=items.length;
//  var resultIndex=0,counter1=0,counter2=0;
//  for(var i=0;i<arrayLength;i++)
//  {
//  if(pred(items[i]))
//  {
// second[counter2]=items[i];
// counter2++;
//  }else{
//     first[counter1]=items[i];
//     counter1++;
// resultIndex=counter1;
//  }
//  }

function partitionOn(pred, items) {

   var trueArray = items.filter((x) => pred(x)); 
   
   var falseArray = items.filter((x) => !pred(x));
   
   
   //  for(var j=0;j<counter2;j++)
   //  {
   //     first[counter1]=second[j];
   //     counter1++;
   //  }
   
   //  for(var k=0;k<arrayLength;k++)
   //  {
   //  items[k]=first[k];
   //  }
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