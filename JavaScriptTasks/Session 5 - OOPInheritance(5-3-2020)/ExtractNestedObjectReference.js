// PROBLEM STATEMENT :Extract Nested Object Reference

// http://www.codewars.com/kata/extract-nested-object-reference

// SOLUTION:

  // return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function( string, obj ) {
  let parts = string.split( "." );
   let lengthofparts = parts.length;
   let i;
  let  property = obj || this;

  for ( i = 0; i < lengthofparts; i++ ) {
   if(property == undefined  || parts == undefined){
  return undefined;}
    property = property[parts[i]];
   
  }
  

  return property;
}














