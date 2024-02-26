const name = "John"
const age = 31
const city = "Miami"
const job = "Developer"
let html;

//without template literals (ES5)
html = '<ul><li>Name: '+name+'</li><li>Age: '+age+'</li><li>Job: '+job+'</li><li>City: '+city+'</li></ul>';

html= '<ul>'+
'<li>Name: '+name+'</li>'+
'<li>Age: '+age+'</li>'+
'<li>Job: '+job+'</li>'+
'<li>City: '+city+'</li>'+
'</ul>';


function hello(){
  return 'hello'
}
//with template literals (ES6)

html = `
<ul>
<li>Name: ${name} </li>
<li>Age: ${age}</li>
<li>City: ${city}</li>
<li>Job: ${job}</li>
<li>${4+4}</li>
<li>${hello()}</li>
<li>${age>30 ? 'over 30' : 'under 30'}</li>
</ul>
`;

document.body.innerHTML = html;