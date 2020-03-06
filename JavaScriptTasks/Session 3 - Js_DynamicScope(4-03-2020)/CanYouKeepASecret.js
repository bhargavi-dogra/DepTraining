// PROBLEM STATEMENT :Can you keep a secret

// http://www.codewars.com/kata/can-you-keep-a-secret 

// SOLUTION:

function createSecretHolder(secret) {

  var obj = {
  
  SecretKey : secret ,
  
  getSecret :function () { 
      return obj.SecretKey;
    }
   ,
   setSecret :function (x) { 
      obj.SecretKey= x;
        }
    }
    return obj;
   
  }