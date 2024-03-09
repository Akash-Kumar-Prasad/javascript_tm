// FOR LOOP
//cant use const
for(let i=0;i<10;i++){
  //console.log(i);
  if(i===2){
    console.log(`2 is my fav number`);
    continue;
  }

  if(i===5){
    console.log('stop here');
    break;
  }
  console.log(`number ${i}`);
}

// WHILE LOOP

let j=0;
while(j<5){
  console.log('Number '+j)
  j++
}

// DO WHILE LOOP

let k= 100;
do{
  console.log('Num '+k);
  k++
}
while(k < 10)

const cars = ['honda', 'toyota', 'ford', 'chevrolet']
for(let l=0;l<cars.length;l++){
  console.log(cars[l]);
}

// FOR EACH LOOP, used for arrays
//take a callback function 
//or an anonymous function
//in forEach, the function takes three parameters namely
//function(iterator[to traverse], index[indexes are automatically provided], array[the original array itself])
cars.forEach(function(current, index , array){
  console.log(`${index} : ${current}`);
  console.log(array);
})
//here current is an iterator that is used to traverse through the array
//



// MAP can work in few different ways
//used to return a something  different
//map takes a function and also give an iterator
//it returns an array by default
const users = [
  {id: 1, name:'john'},
  {id: 2, name:'sarah'},
  {id: 3, name:'karen'},
  {id:4, name:'steve'}
]

const ids = users.map(function(user){
  return user.id
})

console.log(ids);



// FOR IN LOOP, used for objects

const alluser = {
  fname:'John',
  lname:'Doe',
  age:40
}
for(let x in alluser){
  console.log(x);//only x[iterator] will give the keys from the pair of Key and Value of the object
  console.log(`${x} : ${alluser[x]}`);
  //if we want to take both then we have to go through the real object with x as its iterator, as seen above
}
