const lightThemeButton = document.getElementById("lightThemeButton");
const darkThemeButton = document.getElementById("darkThemeButton");
const darkThemeIcon = document.querySelector(".darkThemeButton i");
const lightThemeIcon = document.querySelector(".lightThemeButton i");
const currencyInput = document.getElementById("currencyInput");
const convertButton = document.getElementById("convertButton");
const outputField = document.getElementById("outputField");

darkThemeButton.addEventListener("click", function () {
  darkThemeButton.classList.add("showAnimation");

  darkThemeButton.style.background = "white";
  darkThemeIcon.style.color = "black";

  lightThemeButton.style.background = "black";
  lightThemeIcon.style.color = "white";

  darkThemeButton.addEventListener("animationend", function () {
    darkThemeButton.classList.remove("showAnimation");
  });
});

lightThemeButton.addEventListener("click", function () {
  lightThemeButton.classList.add("showAnimation");

  lightThemeButton.style.background = "white";
  lightThemeIcon.style.color = "black";

  darkThemeButton.style.background = "black";
  darkThemeIcon.style.color = "white";

  lightThemeButton.addEventListener("animationend", function () {
    lightThemeButton.classList.remove("showAnimation");
  });
});

convertButton.addEventListener("click", function () {
  let currency = 0;
  currency = currencyInput.value;

  outputField.innerHTML = currency;
});
