const formEl = document.querySelector("form");
const resetEl = document.getElementById("reset-button");
const submitEl = document.getElementById("submit-button");
const labelArray = ["HRA", "DA", "PF", "Tax", "Deductions", "Net Salary"];

submitEl.addEventListener("click", function (e) {
  e.preventDefault();
  const basicSalaryEl = document.getElementById("base-pay");
  const grosssalaryEl = document.getElementById("gross-pay");

  // Salary Report Calculation
  const inputArray = [
    0.4 * basicSalaryEl.value,
    0.6 * basicSalaryEl.value,
    0.13 * grosssalaryEl.value,
    0.2 * grosssalaryEl.value,
    0.13 * grosssalaryEl.value + 0.2 * grosssalaryEl.value,
    grosssalaryEl.value -
      (0.13 * grosssalaryEl.value + 0.2 * grosssalaryEl.value),
  ];

  // Salary Report title
  const salaryTitleEl = document.createElement("h2");
  salaryTitleEl.textContent = "Salary Report";
  formEl.appendChild(salaryTitleEl);

  // Label & Input value creation
  for (let i = 0; i < labelArray.length; i++) {
    const labelEl = document.createElement("label");
    labelEl.textContent = labelArray[i];
    labelEl.setAttribute("for", `${labelArray[i].toLowerCase()}`);

    const inputEl = document.createElement("input");
    inputEl.value = inputArray[i].toFixed(2);
    inputEl.classList.add("calculated-input");
    inputEl.setAttribute("disabled", "");

    formEl.appendChild(labelEl);
    formEl.appendChild(inputEl);
  }

  // Button change
  submitEl.style.display = "none";
  resetEl.style.display = "block";
});

resetEl.addEventListener("click", function () {
  // deleting created salary report on reset
  for (let i = 13; i > 0; i--) {
    formEl.removeChild(formEl.lastChild);
  }

  // Button change
  resetEl.style.display = "none";
  submitEl.style.display = "block";
});

// addEventListner('event',function(e){})
// classList.add('class')
// setAttribute('name','value')
// createElement('element')
// removeChild()
// appendChild()
// lastChild()
