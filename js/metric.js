





function myFunction() {
  console.log("Hello World!");
  //let temp = document.getElementById('celsius').value;
  //var converted = value + result;
  //document.getElementById('farenheit').innerHTML(temp);
}

function someOtherFunction() {
  alert ("This function was also executed!")
}
let temp = document.getElementById('temperature');
temp.addEventListener("click", myFunction);
temp.addEventListener("click", someOtherFunction);
//x.addEventListener('click', myFunction);