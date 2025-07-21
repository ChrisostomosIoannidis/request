const axios = require('axios');

const API_KEY = '6B844e5ebF345cc5b2d366236648480C'; 


function getRandomCurrency() {
    const currencyList = ['USD', 'GBP', 'JPY', 'CHF', 'AUD', 'CAD', 'ZAR', 'INR'];
    return currencyList[Math.floor(Math.random() * currencyList.length)];
}
const stopCurrency='USD';
const targetCurrency = getRandomCurrency();
console.log(`Αναζητώ ισοτιμία για: ${targetCurrency}`);


const interval = setInterval(() => {
    axios.get('https://api.exchangerate.host/latest', {
        params: {
            access_key:'API_KEY',
            base: 'EUR'
           
        }
    })
    .then(response => {
        console.log("API response:", response.data);

        const rates = response.data.rates;
        const currentRate = rates[targetCurrency];

        console.log(`Τρέχουσα τιμή για ${targetCurrency}: ${currentRate}`);

        if (currentRate) {
            console.log(`Η τιμή του ${targetCurrency} είναι: ${currentRate}`);
            clearInterval(interval); // σταματάει loop
        } else {
            console.log(`Δεν βρέθηκε τιμή για ${targetCurrency}`);
        }
    })
    .catch(error => {
        console.error("API error:", error.message);
        clearInterval(interval);
    });
}, 3000);
