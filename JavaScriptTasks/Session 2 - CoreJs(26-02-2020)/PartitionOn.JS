PROBLEM STATEMENT :Partition On
Write a function which partitions a list of items based on a given predicate.

After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).

NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts) should be preserved relative to each other.

For convenience and utility, the partition function should return the boundary index. In other words: the index of the first T value in items.

SOLUTION:

// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
 var result=[],second=[];
 var len=items.length;
 var r=0,a=0,b=0;
 for(var i=0;i<len;i++)
 {
 if(pred(items[i]))
 {
//result=items.splice(len,1,items[i]);
second[b]=items[i];
b++;
 }
 else
 {
//r=i;
//result=items.splice(len,1,items[i]); 
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


// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
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