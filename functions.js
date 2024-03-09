//FUNCTION DECLARATIONS

function greet(firstName='John', lastName='Doe'){
  //if(typeof firstName === 'undefined'){firstName = 'John'}
  //if(typeof lastName === 'undefined'){ lastName = 'Doe'}
  //console.log("Hello");
  return `hello ${firstName} ${lastName}`
}

//console.log(greet('Steve', 'Smith'));

//FUNCTION EXPRESSION

const square = function(x=3){
return x*x;
};

console.log(square(5));

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFE 
//declare and run at the same time

(function (){
  console.log("iife ran");
})();

(function (naam){
console.log("Hello "+naam);
})('brad');

//PROPERTY METHODS

const todo = {
  add : function (){
    console.log('Add to do');
  },
  edit: function(id){
    console.log(`edit todo... ${id}`);
  }
}

todo.delete = function(){
  console.log(`delete todo `);
}

todo.add()

todo.edit(22)

todo.delete()