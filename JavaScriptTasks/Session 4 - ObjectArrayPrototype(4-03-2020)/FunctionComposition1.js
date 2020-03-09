Problem Statement :Function composition1

link :https://www.codewars.com/kata/function-composition-1

Solution :

const compose = (...fns) => input => fns.reduceRight((mem, fn) => fn(mem), input)


const multTwo  = x => x * 2
const addOne = x => x + 1