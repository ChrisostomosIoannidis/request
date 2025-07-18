const axios = require('axios');

const API_KEY = '68844e5ebf345cc5b2d366236648480c';
const URL = `https://api.apilayer.com/exchangerates_data/latest?base=EUR&apikey=${API_KEY}`;

axios.get('https://api.exchangeratesapi.io/v1/latest',{
    params:{
        access_key:API_KEY,
        base:'EUR'
    }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('API error:', error.message);
  });
