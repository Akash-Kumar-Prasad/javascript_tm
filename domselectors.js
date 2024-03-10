//document.getElementById()

console.log(document.getElementById('task-title'));

//get things from the element

console.log(document.getElementById('task-title').id )
console.log(document.getElementById('task-title').className);

const tasktitle =document.getElementById('task-title')

//change styling

document.getElementById('task-title').style.background = 'red'
document.getElementById('task-title').style.color = 'white'
document.getElementById('task-title').style.padding = '5px'
// document.getElementById('task-title').style.display = 'none'

//change content

document.getElementById('task-title').textContent = 'Task List'
document.getElementById('task-title').innerText = 'My Task List'
document.getElementById('task-title').innerHTML = '<span style="color:blue">My My</span>'

//document.querySelector()


console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color='red'
document.querySelector('ul li').style.color='blue'
document.querySelector('li:last-child').style.color='blue'
document.querySelector('li:nth-child(3)').style.color='yellow'
document.querySelector('li:nth-child(4)').textContent='HEllo'
document.querySelector('li:nth-child(odd)').style.background='grey'
document.querySelector('li:nth-child(even)').style.background = 'black'








