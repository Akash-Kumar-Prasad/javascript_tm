const firstName = "Williams"
const lastName = "Johnson"
const age= 30
const str = "hello there my name is akash"
const tags = 'web design, development, programming'
let val;
val = firstName +lastName

//concatenation
val = firstName + " " + lastName

//append
val = "Brad "
val+="Traversy"

val="My name is "+firstName + "and I am "+age

//escaping
val ='that\'s awesome, I can\'t wait'

//length is a property not a method that is why no parenthesis is used
val = firstName.length

//concat
val= firstName.concat(' ',lastName)

//change case
val=firstName.toUpperCase()
val=lastName.toLowerCase()

val=firstName[0]
val=lastName[3]

//indexof

val=firstName.indexOf('l')
val=firstName.lastIndexOf('a')
val=firstName.charAt('4')

val=firstName.charAt(firstName.length-1)

//substring()
val=firstName.substring(0,4)

//slice
val=firstName.slice(0,3)
val=firstName.slice(-4)

//split
val=str.split(" ")
val=tags.split(",")

//replace
val=str.replace("akash", "brad")

//includes
val=str.includes("hello")

console.log(val);