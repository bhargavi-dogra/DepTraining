PROBLEM STATEMENT :Partition On

http://www.codewars.com/kata/partition-on 

SOLUTION:

function partitionOn(pred, items) {
 var result=[],second=[];
 var len=items.length;
 var r=0,a=0,b=0;
 for(var i=0;i<len;i++)
 {
 if(pred(items[i]))
 {
second[b]=items[i];
b++;
 }
 else
 {
result[a]=items[i];
a++;
r=a;
 }
 }
 for(var j=0;j<b;j++)
 {
 result[a]=second[j];
 a++;
 }

 for(var k=0;k<len;k++)
 {
 items[k]=result[k];
 }


 return r;
 

}






//Aletnative Solution



function partitionOn(pred, items) {
 var result=[],second=[];
 var len=items.length;
 var r=0,a=0,b=0;
 for(var i=0;i<len/2+1;i++)
 {
 if(pred(items[i]))
 {
items.splice(len,0,items[i]);
items.splice(i,1);
a++;
 }
 else
 {
items.splice(a,0);
a++;
 }
 }
 console.log(items);
 return a-1;
 

}