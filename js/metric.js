function convertDistance() {
    let d = document.getElementById('naut').value;
    let milesConverted = d * 1.151;  //conversion formula
    document.getElementById('miles').value = milesConverted;
}

    let dist = document.getElementById('distance');
    dist.addEventListener("click", convertDistance);

function convertTemp() {
  
  let t = document.getElementById('celsius').value;
  let converted = t * 1.8 + 32;  //formula for conversion
 
  document.getElementById('fahrenheit').value = converted;
}

  let temp = document.getElementById('temperature');
  temp.addEventListener("click", convertTemp);
