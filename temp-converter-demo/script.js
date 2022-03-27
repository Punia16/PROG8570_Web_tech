let celsiusInput = document.querySelector('.celsius-input')
let fahrenheitInput = document.querySelector('.fahrenheit-input')
let outputText = document.querySelector('.output-text')

function celsiusToFahrenheit() {
 if (!celsiusInput.value) {

  return
 }

 let conversion = (parseFloat(celsiusInput.value) * 9 / 5) + 32
 fahrenheitInput.value = parseFloat(conversion.toFixed(2))

 outputText.innerHTML = ''
}

function fahrenheitToCelsius() {
 if (!fahrenheitInput.value) {
  return
 }
 let conversion = (parseFloat(fahrenheitInput.value) - 32) * 5 / 9
 celsiusInput.value = parseFloat(conversion.toFixed(2))

 outputText.innerHTML = ''
}

function shouldWearSweater() {
 if (!celsiusInput.value || !fahrenheitInput.value) {
  outputText.innerHTML = 'Provide a temperature'
  outputText.style.color = '#BF616A'
  return
 }

 if (celsiusInput.value <= 15 || parseFloat(fahrenheitInput.value <= 59)) {
  outputText.innerHTML = 'Its cold outside, wear a sweater 🥶'
  outputText.style.color = '#8FBCBB'
  return
 }

 outputText.innerText = 'Its nice outside, wear a t-shirt ☀️'
 outputText.style.color = '#8FBCBB'
}
