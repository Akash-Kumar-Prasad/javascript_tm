//create some arrays
const numbers = [12,2,3,34,5,6, 56, 66]
const numbers2 = new Array(22,44,55,778,8,45,776, 0)
const fruits= ['apple', 'banana', 'orange', 'pear']

const mixed = [22, 'hello' , true, undefined, null, {a:1, b:3}, new Date()]

let val;

//get array length
val=numbers.length
//check if is array
val=Array.isArray(numbers)
//get single value
val=numbers[3]
val=numbers[0]
//insert into array
numbers[0]=100
numbers.push(65)
//find index of
val=numbers.indexOf(34)
//mutating arrays
//add at last
numbers.push(250)
//remove from last
numbers.pop()
//add at front
numbers.unshift(120)
//remove from front
numbers.shift()
//splice values
numbers.splice(1,3)
//reverse
numbers.reverse()
//concat
val=numbers.concat(numbers2)
//sort
val=fruits.sort()
val=numbers.sort()

//use the compare function
val=numbers.sort(function(x,y){
  return x-y
})
//reverse sort
val=numbers.sort(function(x,y){
  return y-x
})

//find
function under50(num){
return num<50
}
val=numbers.find(under50)
console.log(numbers);
console.log(val);