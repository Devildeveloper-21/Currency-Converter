import { currencySymbols } from "./currencySigns.js";
const lightThemeButton = document.getElementById("lightThemeButton");
const darkThemeButton = document.getElementById("darkThemeButton");
const darkThemeIcon = document.querySelector(".darkThemeButton i");
const lightThemeIcon = document.querySelector(".lightThemeButton i");

// Dark Theme Listener.
darkThemeButton.addEventListener("click", function () {
  darkThemeButton.classList.add("showAnimation");
  document.body.classList.add("themeToggle");
  setTimeout(() => {
    document.body.classList.remove("themeToggle");
  }, 1000);

  darkThemeButton.style.background = "white";
  darkThemeIcon.style.color = "black";

  lightThemeButton.style.background = "black";
  lightThemeIcon.style.color = "white";

  document.body.classList.add("darkTheme");

  lightThemeButton.classList.remove("showAnimation");
});

// Light Theme Listener.
lightThemeButton.addEventListener("click", function () {
  lightThemeButton.classList.add("showAnimation");
  document.body.classList.add("themeToggle");
  setTimeout(() => {
    document.body.classList.remove("themeToggle");
  }, 1000);

  lightThemeButton.style.background = "white";
  lightThemeIcon.style.color = "black";

  darkThemeButton.style.background = "black";
  darkThemeIcon.style.color = "white";
  document.body.classList.remove("darkTheme");

  darkThemeButton.classList.remove("showAnimation");
});

let rate;
const convertButton = document.getElementById("convertButton");
const outputField = document.getElementById("outputField");

convertButton.addEventListener("click", function () {
  const fromCurrency = document.getElementById("fromCurrency").value.toUpperCase();
    const toCurrency = document.getElementById("toCurrency").value.toUpperCase();
    getCurrencyInfo(fromCurrency, toCurrency);
  });
  
  function convertCurrency(rate, symbol) {
    const currencyInput = Number(document.getElementById("currencyInput").value);
    if (!currencyInput) {
      alert("Enter Valid Input");
      return;
    }
    
    let amount = currencyInput * rate;
    outputField.innerText = symbol + " " + amount.toFixed(2);
  }
  
  async function getCurrencyInfo(getFromCurrency, getToCurrency) {
    try {
      const res = await fetch(
        `https://open.er-api.com/v6/latest/${getFromCurrency}`,
      );
      const data = await res.json();
      let rate = data.rates[getToCurrency];
      let symbol = currencySymbols[getToCurrency];
    convertCurrency(rate, symbol);
  } catch (error) {
    console.log("Data fetch failed", error);
  }
}
