// WINDOW METHODS AND OBJECT AND PROPERTIES

//window is the global object in client side js
//dom is a part of window object
//nodejs is a js runtime, standalone

//console.log(123);
//alert
//alert('hello world')

// prompt
// const input = prompt();
// alert(input)

//confirm
// if(confirm('are you sure')){
//   console.log('YES');
// }else{
//   console.log("NO");
// }

let val;
//outer height and width
// val=window.outerHeight;
// val=window.innerHeight;

// val= window.innerWidth;
// val=window.innerHeight;

// //scroll point
// val=window.scrollY;
// val=window,scrollX;


//location object

val=window.location;
val=window.location.hostname
val=window.location.host
val=window.location.port;
val=window.location.href;
val=window.location.search;
//redirect
// window.location.href= 'http://google.com'
//reload
// window.location.reload()

//history object

// window.history.go()
// val-window.history.length;

//navigator object

val= window.navigator;
val=window.navigator.appName;
val=window.navigator.appVersion;
val=window.navigator.userAgent;
val=window.navigator.platform;
val=window.navigator.vendor;
val=window.navigator.language;

console.log(val);