//Function Cache
//link :http://www.codewars.com/kata/function-cache



function cache(func) {

    var cached_func = func,
  
        cached_func_data = [];
  
     
    return function() {
  
      var args_len = arguments.length,
  
          i,
  
          j;
  
       
  
      if (!cached_func_data.length) {
  
        return callCachedFunc(arguments);
  
      }
  
       
  
      for (i = 0; i < args_len; i++) {
  
        for (j = 0; j < cached_func_data[i].args.length; j++) {
  
          if (cached_func_data[i].args[i] === arguments[i]) {
  
            continue;
  
          }
  
          return cached_func_data[j].res;
  
        }
  
        return callCachedFunc(arguments);
  
      }
  
       
  
      function callCachedFunc(arguments) {
  
        var cache_obj = {};
  
        cache_obj.args = Array.prototype.slice.call(arguments);
  
        cache_obj.res = cached_func.apply(null, arguments);
  
        cached_func_data.push(cache_obj);
  
        return cache_obj.res;
  
      }
  
    }
  
  }