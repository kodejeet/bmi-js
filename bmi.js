  const form = document.querySelector('form'); //detects when the user submits the form
// this usecase will give you empty

form.addEventListener('submit', function (e) {
  e.preventDefault(); // it calculates the BMI without sending the data to the server hence prevent

  const height = parseInt(document.querySelector('#height').value); // form returns string thats why parseInt
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); // rounds to 2 decimal places 
    //show the result
    results.innerHTML = `<span>${bmi}</span>`; // output on screen without refreshing
  }
});

