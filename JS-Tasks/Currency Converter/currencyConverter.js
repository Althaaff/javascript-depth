document.addEventListener("DOMContentLoaded", () => {
  const amountInput = document.getElementById("amount");
  const sourceCurrency = document.getElementById("sourceCurrency");
  const targetCurrency = document.getElementById("targetCurrency");
  const convertButton = document.getElementById("convertButton");
  const swapButton = document.getElementById("swapButton");
  const error = document.getElementById("error");
  const loadingMessage = document.getElementById("loading");
  const result = document.getElementById("result");

  const API_KEY = "fca_live_G6UE1M3Rq2E7FijPrDOcjta0KLTy0jQ96yrspX9Z";
  const BASE_URL = "https://api.freecurrencyapi.com/v1";

  let currencies = {};

  // fetch all currencies :
  async function fetchCurrencies() {
    toggleLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/currencies?apikey=${API_KEY}`);
      if (!response.ok) throw new Error("Failed to fetch currencies");
      const data = await response.json();
      currencies = data.data;
      renderCurrencies();
    } catch (err) {
      showError("Unable to load currencies. Try again later.");
    } finally {
      toggleLoading(false);
    }
  }

  function renderCurrencies() {
    const currenciesArray = Object.entries(currencies).map(
      ([code, details]) => ({
        code,
        name: details.name || code,
      })
    );

    [sourceCurrency, targetCurrency].forEach((select) => {
      select.innerHTML = currenciesArray
        .map((c) => `<option value=${c.code}>${c.code} - ${c.name}</option>`)
        .join("");
    });

    sourceCurrency.value = "USD";
    targetCurrency.value = "EUR";
  }

  async function fetchConversion(amount, from, to) {
    toggleLoading(true);

    try {
      const response = await fetch(
        `${BASE_URL}/latest?apikey=${API_KEY}&base_currency=${from}&currencies=${to}`
      );

      if (!response.ok) throw new Error("Failed to fetch conversion rate");

      const data = await response.json();
      // console.log("conversion data", data);
      const rate = data.data[to];
      // console.log("rate", rate);

      if (!rate) throw new Error("Invalid currency pair");

      return amount * rate;
    } catch (error) {
      showError("Conversion failed. Check inputs or try again later.");
      return null;
    } finally {
      toggleLoading(false);
    }
  }

  function validateInput(amount) {
    if (!amount || amount <= 0) {
      showError("Enter positive number..");

      return false;
    }

    return true;
  }

  async function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const from = sourceCurrency.value;
    const to = targetCurrency.value;

    if (!validateInput(amount)) return;

    const converted = await fetchConversion(amount, from, to);

    if (converted !== null) {
      result.textContent = `${amount.toFixed(2)} ${from} = ${converted.toFixed(
        2
      )} ${to}`;

      error.classList.add("hidden");
    } else {
      result.textContent = "";
    }
  }

  function swapCurrencies() {
    const temp = sourceCurrency.value;
    sourceCurrency.value = targetCurrency.value;
    targetCurrency.value = temp;

    result.textContent = "";
  }

  function showError(message) {
    error.textContent = message;
    error.classList.remove("hidden");
    setTimeout(() => error.classList.add("hidden"), 3000);
  }

  function toggleLoading(show) {
    loadingMessage.classList.toggle("hidden", !show);
    convertButton.disabled = show;
  }

  convertButton.addEventListener("click", convertCurrency);
  swapButton.addEventListener("click", swapCurrencies);

  amountInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      convertCurrency();
    }
  });

  [amountInput, sourceCurrency, targetCurrency].forEach((elm) => {
    elm.addEventListener("input", () => {
      result.textContent = "";
      error.classList.add("hidden");
    });
  });

  fetchCurrencies();
});
