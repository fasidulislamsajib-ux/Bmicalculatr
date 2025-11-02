// Get elements
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDiv = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn");

// BMI calculation function
function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    // Clear previous class
    resultDiv.className = "result";

    if (!weight || !height) {
        resultDiv.innerText = "Please enter valid weight & height";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = "";
    let categoryClass = "";

    if (bmi < 18.5) {
        category = "Underweight";
        categoryClass = "underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
        categoryClass = "normal";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
        categoryClass = "overweight";
    } else {
        category = "Obese";
        categoryClass = "obese";
    }

    resultDiv.innerText = `BMI: ${bmi} | Category: ${category}`;
    resultDiv.classList.add(categoryClass);
}

// Button click event
calculateBtn.addEventListener("click", calculateBMI);
