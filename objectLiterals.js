const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age:28,
  email:'steve@aol.com',
  hobbies:['music','sports'],
  address: {
    city:'Miami',
    state: 'Florida'
  },
  getBirthYear: function(){
    return 2024-this.age;
  }

}

let val;
val = person;

//get specific value
val = person.firstName;
val = person['lastName']
val=person.age
val=person.hobbies
val=person.hobbies[0]
val=person.hobbies[1]
val=person.address
val=person.address.city
val=person.address.state
val=person.getBirthYear
console.log(val);

const people = [
  {name: 'John', age:20},
  {name:'Mike', age:30},
  {name:'Sam', age:33}
]

for(let i=0;i<people.length ;i++){
console.log(people[i].name);
}