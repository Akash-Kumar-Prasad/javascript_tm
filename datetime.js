let val;

const today = new Date();
let birthday = new Date('9-10-1988 11:25:00')

birthday = new Date('September 10 1981')
birthday = new Date ('9/11/1985')


//getMonth is 0 based
val = today.getMonth();
val=today.getDate()
//sunday as a starting point
val=today.getDay()

val=today.getFullYear()
val=today.getHours()
val=today.getMinutes()
val=today.getSeconds()
val=today.getMilliseconds()
val=today.getTime()

birthday.setMonth(0)
birthday.setDate(11)
birthday.setFullYear(1996)
birthday.setHours(9)
birthday.setMinutes(26)
console.log(birthday);