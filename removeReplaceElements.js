//replace elements
//create element

const newHeading = document.createElement('h2')
newHeading.id = 'task-title'
//NEw text node
newHeading.appendChild(document.createTextNode('task list'))
//get old heading
const oldHeading = document.getElementById('task-title')
//parent
const cardAction = document.querySelector('.card-action')
//replace
cardAction.replaceChild(newHeading, oldHeading)
console.log(newHeading);

//remove element
const lis = document.querySelectorAll('li')
const list = document.querySelector('ul')

//remove item list

lis[0].remove()

//remove child element

list.removeChild(lis[3])


//classes and attributes

const firstLi = document.querySelector('li:first-child')
const link = document.querySelector('li:first-child')
console.log(firstLi.children[0]);

let val;
val= link.className
val=link.classList
val=link.classList[0]

link.classList.add('test')
link.classList.remove('test')
val=link;

//attributes

val=link.getAttribute('href')
val=link.setAttribute('href', 'http://google.com')
link.setAttribute('title', 'google')

val=link.hasAttribute('href')
link.removeAttribute('title')
val=link
console.log(val);