const numberOneInput = document.querySelector("#numberOne");
const numberTwoInput = document.querySelector("#numberTwo");
const addValuesButton = document.querySelector("#addValues");
const resultDiv = document.querySelector("#result");
const errorBox = document.querySelector("#error");

const parseInputs = (...input) => {
  return input.map(str => parseInt(str));
};

const inputsAreValid = (...input) => {
  return input.every(num => typeof num === "number" && !isNaN(num));
};

const handleAdditionError = (inputs, numbers) => {
  const fullMessage = inputs.reduce((message, str, index) => {
    if (inputsAreValid(numbers[index])) {
      return message + "";
    } else {
      return message + `${str} is not a number. `;
    }
  }, "Please enter two valid numbers! ");

  errorBox.classList.remove("invisible");
  errorBox.innerText = fullMessage;
};

const hideErrors = () => {
  errorBox.classList.add("invisible");
};

hideErrors();

addValuesButton.addEventListener("click", () => {
  hideErrors();
  const inputs = [numberOneInput.value, numberTwoInput.value];
  const parsedInputs = parseInputs(...inputs);
  if (inputsAreValid(...parsedInputs)) {
    const [numA, numB] = parsedInputs;
    resultDiv.innerText = numA + numB;
  } else {
    resultDiv.innerText = "";
    handleAdditionError(inputs, parsedInputs);
  }
});