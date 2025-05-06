document.getElementById('convertBtn').addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const apiKey = '33350ce95437954cc1782563'; // Replace with your ExchangeRate-API key
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.result === 'success') {
          const convertedAmount = data.conversion_result;
          document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
          document.getElementById('result').innerText = 'Conversion failed. Please try again.';
        }
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
        document.getElementById('result').innerText = 'Failed to fetch exchange rates.';
      });
  });