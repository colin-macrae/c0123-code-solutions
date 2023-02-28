// setTimeout(() => { console.log("this is the third message") }, 1000);
setTimeout(function changeUp() {
  var h1 = document.querySelector('h1');
  h1.textContent = 'Hello There';
}, 2000);
