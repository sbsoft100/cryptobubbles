require('dotenv').config();  // Load environment variables from .env file
const axios = require('axios');

// Read the API key and URL from environment variables
const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;

// Make the API call using axios
axios.get(apiUrl, {
  headers: {
    'X-CMC_PRO_API_KEY': apiKey,  // API key in the header
    'Accept': 'application/json'   // Ensure the response is in JSON format
  }
})
  .then(response => {
    console.log('API Response:', response.data);  // Log the response data
  })
  .catch(error => {
    console.error('Error making API request:', error);  // Log 