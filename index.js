function bin2Dec() {
  const error = document.getElementById('error');
  const binary = document.getElementById('binNumber').value;
  const decimal = document.getElementById('decNumber');
  error.innerHTML = 'Error';
  error.style = "visibility: hidden";
  decimal.value = '';
  if (binary.match(/^[0-1]+$/g) === null) {
    error.innerHTML = 'You should enter only 0 or 1!';
    error.style = "visibility: visible";
  } else {
    // Calculating decimal
    const result = binary.split('').map(Number).reverse().reduce((accumulator, currentValue, idx) =>
      accumulator + (currentValue * Math.pow(2, idx))
    );
    decimal.value = result;
  }
}