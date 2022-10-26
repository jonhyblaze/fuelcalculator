// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("service-worker.js").then(registration => {
//     console.log("SW registered")
//     console.log(registration)
//   }).catch(error => {
//     console.log("SW registration failed!")
//     console.log(error)
//   })
// }

function fuelCalculator() {
  // * Selecting elements from DOM
  const distance = +document.getElementById('distance').value
  const averageConsumption = +document.getElementById('average').value
  const costOfLiter = +document.getElementById('cost').value
  const resultCost = document.getElementById('tripcost')
  const resultFuel = document.getElementById('fuelcost')
  const currency = document.getElementById('currency')

  // * Math logic
  const fuelPerKm = +(averageConsumption / 100).toFixed(3)
  const totalFuel = +(fuelPerKm * distance).toFixed(2)
  const tripCost = +(totalFuel * costOfLiter).toFixed(2)

  // ? This is way to select active option on dropdown list   (currency.options[currency.selectedIndex].value)

  function currencyVario() {
    if (currency.options[currency.selectedIndex].value === 'uah') return '₴'
    if (currency.options[currency.selectedIndex].value === 'usd') return '$'
    if (currency.options[currency.selectedIndex].value === 'eur') return '€'
  }

  // * Updating HTML with all the math calculations

  resultCost.value = `${currencyVario()}${tripCost}`
  resultFuel.value = `${totalFuel}L`
  resultCost.innerHTML = resultCost.value
  resultFuel.innerHTML = resultFuel.value
}

// * Selecting event target element from DOM:

const button = document.querySelector('#button')

// * Adding an event listener to the button:

button.addEventListener('click', fuelCalculator)

// ? Event handler function to update placeholder value, due to selected currency

function placeholderCurrSwitcher() {
  const costInput = document.getElementById('cost')
  if (currency.options[currency.selectedIndex].value === 'uah')
    costInput.placeholder = '₴/L'
  if (currency.options[currency.selectedIndex].value === 'usd')
    costInput.placeholder = '$/L'
  if (currency.options[currency.selectedIndex].value === 'eur')
    costInput.placeholder = '€/L'
}

// * Adding event listener

currency.onchange = placeholderCurrSwitcher
