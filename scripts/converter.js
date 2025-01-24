// Excgange rates for various currencies
const exchangeRates = {
    USD: 1.0,
    EUR: 0.85,
    JPY: 110.0,
    CAD: 1.25,
    GBY: 0.75,
    AUD: 1.35,
    CHF: 0.92,
    SNY: 6.45,
    INR: 73.0,
    RUB: 74.0,
    BRL:5.25
};
// Function to convert currency
function convertCurrency(){
    // Get input values
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
 
    // Log input values to console
    console.log(`Amount: ${amount}`);
    console.log(`From Currency: ${fromCurrency}`);
    console.log(`To Currency: ${toCurrency}`);

    //validate input values
    if (!amount || isNaN(amount)) {
        alert("Please enter the valid amount.");
        return;
    }
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
        alert("Invalid currency selection");
        return;
    }
    // Using a for, in loop to print all exchange rates
    console.log("Exchange Rates");
    for (const currency in exchangeRates) {
        console.log(`${currency}: ${exchangeRates[currency]}`);
    }
    //vCalculate converted amount
    const fromRate = exchangeRates [fromCurrency];
    const toRate  = exchangeRates [toCurrency];
    const convertedAmount = (amount / fromRate) * toRate;

    // Format converted amount using Numeral.js
     const formattedAmount = numeral(convertedAmount).format('0, 0.00');

    //
    document.getElementById('result').textContent = `{amount} ${fromCurrency} is equivalent to ${formattedAmount} ${toCurrency}`;

    // Log selected currency options to console using a for , of loop.
    console.log("Selected Currency Options:");
    const selectedCurrencies = [fromCurrency, toCurrency];
    for (const currency of selectedCurrencies) {
        console.log ('Selected currency: ${currency');
    }
}