function bin2Dec() {
  const error = document.getElementById('error');
  const binary = document.getElementById('binNumber').value;
  if(binary.match(/^[0-1]+$/g) === null) {
    error.innerHTML = 'You should enter only 0 or 1!';
    error.style = "visibility: visible";
  }
}