 //document.getElementsByClassName()

//  const items = document.getElementsByClassName('collection-item')

//  console.log(items);
//  console.log(items[0]);

// items[0].style.color = 'red'
// items[3].textContent = "hello"

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item')

// console.log(listItems);

//document.getElementsByTagName

const lis = document.getElementsByTagName('li')

 console.log(lis);
 console.log(lis[0]);

 lis[0].style.color='red'
 lis[3].textContent='Hello'

 //convert HTML elements to arrays

 lis = Array.from(lis);

 lis.reverse()

 lis.forEach(function(li){
  console.log(li.className);
 });

 console.log(lis);