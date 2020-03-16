// PROBLEM STATEMENT :Partition On

// http://www.codewars.com/kata/prefill-an-array 

// SOLUTION:

function prefill(n, v) {
  
    let ar=[];
    if(n === 0 || n === '0')
    return ar;
    
    
  
    var number ;
    if(typeof n === 'string'|| typeof n === 'number')
    { 
    
    if(typeof n === 'string'){
   
    number = Number.parseInt(n); 
    if(isNaN(number))
    {
    console.log(number);
    throw new TypeError(n + " is invalid");
    }
    
    for( var i = 0; i < n; i++ ) {
      ar.push(v);
    }
  //ar.fill(v,0,n-1);
    }
    else if(typeof n === 'number')
    {
    number = Number.isInteger(n);
    
   // ar.fill(v,0,n-1)
    for( var i = 0; i < n; i++ ) {
      ar.push(v);
    }
    
    }
    }
    else
    {
    throw new TypeError(n + "is invalid"); 
    }
    
    return ar;
  
  }