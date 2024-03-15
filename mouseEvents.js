const clrBtn = document.querySelector('.clear-tasks')
const card = document.querySelector('.card')
const headings = document.querySelector('h5')

//click
//clrBtn.addEventListener('click', runEvent)
//double click
//clrBtn.addEventListener('dblclick', runEvent)
//mouse down 
// clrBtn.addEventListener('mousedown', runEvent)
//mouse up
// clrBtn.addEventListener('mouseup', runEvent)
//mouse enter
// card.addEventListener('mouseenter', runEvent)
//mouse leave
// card.addEventListener('mouseleave', runEvent)
//mouse over
// card.addEventListener('mouseover', runEvent)
//mouse out
// card.addEventListener('mouseout', runEvent)
 //mouse move
card.addEventListener("mousemove", runEvent)
//



//event handler
function runEvent(e){
console.log(`EVENT TYPE : ${e.type}`);
headings.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`
document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}