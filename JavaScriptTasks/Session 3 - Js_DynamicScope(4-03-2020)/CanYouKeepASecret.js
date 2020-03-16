// PROBLEM STATEMENT :Can you keep a secret

// http://www.codewars.com/kata/can-you-keep-a-secret 

// SOLUTION:

function createSecretHolder(secret) {

  let SecretKey = secret ;
  
  var obj = {
  
  getSecret :function () { 
      return SecretKey;
    }
   ,
   setSecret :function (x) { 
      SecretKey= x;
        }
    }
    return obj;
   
  }