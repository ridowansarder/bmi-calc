function calc(){
  let weight = Number(document.querySelector("#weight").value);
  let heightFeet = Number(document.getElementById("feet").value);
  let heightInch = Number(document.getElementById("inch").value);
  let result = document.getElementById("result");

  if(isNaN(weight) || isNaN(heightFeet) || isNaN(heightInch)){
    result.innerHTML = "Please enter valid inputs";
    return
  }
  let height = (((heightFeet * 12) + heightInch) * 2.54) / 100;
  let bmi = weight / (height * height);
  result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. `;

  if(bmi < 18.5){
    result.innerHTML += "You are underweight.";
  } else if(bmi >= 18.5 && bmi < 25){
    result.innerHTML += "You have a normal weight.";
  } else if(bmi >= 25 && bmi < 30){
    result.innerHTML += "You are overweight.";
  } else if(bmi >= 30){
    result.innerHTML += "You are too fat.";
  }
}