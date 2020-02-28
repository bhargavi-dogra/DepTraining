 
 /*PROBLEM STATEMENT - Transportation on vacation
http://www.codewars.com/kata/transportation-on-vacation   */



SOLUTION

function rentalCarCost(d) {
var total;
var days = d;

total = days*40;

if(days >= 7)
{
total = total-50;
}
else if((days >= 3)&&(days < 7))
{
total = total-20;
}
  return total;
}