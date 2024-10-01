let form =  document.querySelector("form")
form.addEventListener("submit",(e)=>{
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#result");

  if (isNaN(height) || height <= 0) {
    result.innerHTML = `Please provide a valid height: ${height}`;
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = `Please provide a valid weight: ${weight}`;
  } 
  else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2); // Height squared
    result.innerHTML = `Your BMI is: ${bmi}`;
    let category;
    if (bmi < 18.9) {
      category = "Underweight";
    } else if (bmi >=18.6 && bmi <= 24.9) {
      category = "Normal weight";
    } else if (bmi >= 24.9) {
      category = "Overweight";
    } 
    result.innerHTML = `Your BMI is: ${bmi} (${category})`;
  }
});