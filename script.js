async function convertCurrency() {
  let amount = document.getElementById('amount').value;
  let fromCurrency = document.getElementById('fromCurrency').value;
  let toCurrency = document.getElementById('toCurrency').value;
  let resultDiv = document.getElementById('result');

  if (amount === '' || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  if (fromCurrency === toCurrency) {
    resultDiv.innerHTML =
      amount + ' ' + fromCurrency + ' = ' + amount + ' ' + toCurrency;
    return;
  }

  //cool loading msg
  resultDiv.innerHTML = 'Converting...';

  let url =
    'https://api.frankfurter.app/latest?amount=' +
    amount +
    '&from=' +
    fromCurrency +
    '&to=' +
    toCurrency;

  try {
    let response = await fetch(url);
    let data = await response.json();

    let convertedAmount = data.rates[toCurrency].toFixed(2);

    resultDiv.innerHTML =
      amount + ' ' + fromCurrency + ' = ' + convertedAmount + ' ' + toCurrency;
  } catch (error) {
    resultDiv.innerHTML = 'Error converting currency. Try again.';
  }
}

//reset button
function resetForm() {
  document.getElementById('converterForm').reset();
  document.getElementById('result').innerHTML = '';
}
