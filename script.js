const lightThemeButton = document.getElementById("lightThemeButton");
const darkThemeButton = document.getElementById("darkThemeButton");
const darkThemeIcon = document.querySelector(".darkThemeButton i");
const lightThemeIcon = document.querySelector(".lightThemeButton i");

// Dark Theme Listener.
darkThemeButton.addEventListener("click", function () {
  darkThemeButton.classList.add("showAnimation");

  darkThemeButton.style.background = "white";
  darkThemeIcon.style.color = "black";

  lightThemeButton.style.background = "black";
  lightThemeIcon.style.color = "white";

  document.body.classList.toggle("darkTheme");

  darkThemeButton.addEventListener("animationend", function () {
    darkThemeButton.classList.remove("showAnimation");
  });
});

// Light Theme Listener.
lightThemeButton.addEventListener("click", function () {
  lightThemeButton.classList.add("showAnimation");

  lightThemeButton.style.background = "white";
  lightThemeIcon.style.color = "black";

  darkThemeButton.style.background = "black";
  darkThemeIcon.style.color = "white";
  document.body.classList.toggle("darkTheme");

  lightThemeButton.addEventListener("animationend", function () {
    lightThemeButton.classList.remove("showAnimation");
  });
});

const convertButton = document.getElementById("convertButton");
const outputField = document.getElementById("outputField");
convertButton.addEventListener("click", function () {
  const currencyInput = document.getElementById("currencyInput").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  let rates = {
    USD: 1,
    INR: 83,
    AED: 0.82
  };
  let amount = (currencyInput / rates[fromCurrency]) * rates[toCurrency];
  outputField.innerText="";
  outputField.innerText=amount.toFixed(2);
});
