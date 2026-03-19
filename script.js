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

let rate;
const convertButton = document.getElementById("convertButton");
const outputField = document.getElementById("outputField");
convertButton.addEventListener("click", function () {
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  getCurrencyInfo(fromCurrency, toCurrency);
});

function convertCurrency() {
  const currencyInput = Number(document.getElementById("currencyInput").value);
  let amount = currencyInput * rate;
  outputField.innerText = "";
  outputField.innerText = amount.toFixed(2);
}

async function getCurrencyInfo(getFromCurrency, getToCurrency) {
  try {
    const res = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${getFromCurrency}.json`,
    )
      const data = await res.json();
      rate= data[getFromCurrency][getToCurrency];
      convertCurrency();
    
  } catch (error) {
    console.log("Data fetch failed",error);
    
  }
}
