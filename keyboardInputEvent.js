const form = document.querySelector('form')
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5')
taskInput.value=""//clear input
const select = document.querySelector('select')
// form.addEventListener('submit', runEvent)
//keydown
// taskInput.addEventListener('keydown', runEvent)

//keyup
taskInput.addEventListener('keyup', runEvent)

//keypress
taskInput.addEventListener('keypress', runEvent)

//focus

taskInput.addEventListener('focus', runEvent)

//blur

taskInput.addEventListener('blur', runEvent)

//cut and paste
taskInput.addEventListener('cut', runEvent)

taskInput.addEventListener('paste', runEvent)

//input

taskInput.addEventListener('input', runEvent)

//change event

select.addEventListener('change', runEvent)

function runEvent(e){
  console.log(`EVENT TYPE ${e.type}`);
  console.log(e.target.value);
 // heading.innerText = e.target.value
  //get input value
//   console.log(taskInput.value);
//   e.preventDefault()
}