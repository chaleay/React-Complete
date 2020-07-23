/**
 * Note: This can all be run using node <name>.js
 * 
 * Let: variable values
 * const: constant values that don't change
 * 
 * let myname = "Max";
 * is the same as var myname = "max";
 * 
 * ARROW FUNCTIONS
 * const printMyName = (name) => {
 *  console.log(name);
 * 
 * const multiply = number => number * 2
 * 
 * 
 * 
 * IMPORTS AND EXPORTS
 * const Person = {
 *  name: 'Max'
 * }
 *  * export default person
 * 
 * 
 * in app.js:
 * import person from './person.js'
 * or 
 * import prs from './person.js' - > this imports person as prs from our export
 * 
 * named export:
 * import {smth} //the name of the export from './utility.js'
 * 
 * Classes
 * class Person{
 *  name = 'Elijah'
 *  call = () => {...} //method 
 *  constructor() {} //note: if you are calling a subclass constructor, you must call super()
 *}
 * 
 * const myPerson = new Person()
 * myPerson.call()
 * 
 Spread:

 const numbers = [1,2,3];
 const newNumbers = [...numbers, 4];
 * 
 REST
 const function = (...args) => {
    return args.filter(el => el === 1);


Restructuring:

w/ Arrays:
[a,b] = [1,2]


Object Destructuring: 
 [name} = {name: 'Max', age: 28}
 console.log('name')
 console.log('age') //leads to error

 map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

*/