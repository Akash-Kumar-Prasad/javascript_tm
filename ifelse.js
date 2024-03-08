//if(something){
//do something
//}
//else{
//do something
//}

const id=100

//equal to

if(id == 100){
  console.log('correct')
}else{
  console.log('incorrect');
}

//not equal

if (id != 101) {
  console.log('correct');
}else{
  console.log('incorrect');
}

//value and type

if (id === 100) {
  console.log('correct');
}else{
  console.log('incorrect');
}

if(typeof id !== 'undefined'){
  console.log(`the id is ${id}`);
}else{
  console.log('no id');
}

//gretaer or less than

if (id >200) {
  console.log('greater than 200');
} else {
  console.log('less than 200');
}

if (id<100) {
  console.log('less than 100');
}else{
  console.log('not less than');
}

//if else

const color = 'red'

if (color ==='red') {
  console.log(`color is red`);
}else if(color ==='blue'){
  console.log('color is blue');
}else{
  console.log('color is neither');
}


//logical operators

const name = 'steve'
const age = 20

if (age > 0 && age <12) {
  console.log(`${name} is a child`);
}else if(age >=13 && age <=19)
{
  console.log(`${name} is teenager`);
}
else{
  console.log(`${name} is an adult`);
}

//or ||

if (age <16 || age >65) {
  console.log(`${name} cannot run in race`);
}else{
  console.log(`${name} is registered in the race`);
}

//ternary operator

console.log(id ===100 ? 'correct' : 'incorrect');

//without braces

if(id ===100 )
  console.log('correct');
else
  console.log('incorrct');