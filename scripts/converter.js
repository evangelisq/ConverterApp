const exchangeRates = {
    USD: 1.0,
    EUR: 0.85,
    JPY: 110.0,
    GBP: 0.75,
    CAD: 1.25,
    AUD: 1.35,
    CHF: 0.92,
    SNY: 6.45,
    INR: 73.0,
    RUB: 74.0,
    BRL: 5.25,
    PESO: 45.0
    // need more currencies
};
function convertCurrency(){
    const amount = document.getElementById('smount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (!amount || isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
        alert("Invalid currency selection.");
        return;
    }
    // Using a for, in loop to print all exchnage rates
    console.log("Excgange Rates:");
    for (const currency in exchangeRates) {
        console.log(`${currency}: ${exchangeRates[currency]}`);
    }
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    const convertedAmount = (amount / fromRate) * toRate;

    document.getElementById('result').textContent = 
    `{amount} ${fromCurrency} is equivalent to ${convertedAmount.toFixed(2)} ${toCurrency}`;

    //using a for, of loop to loop through and print selected currency options.
    console.log("Selected Currency Options:");
    const SelectedCurrencies = [fromCurrency, toCurrency];
    for (const currency of SelectedCurrencies) {
        console.log('Selected currency: ${currency');
    }
}

// Updating the last modified time and date
document.addEventListener('DOMContentLoaded', (Event)=>{
    const lastModifiedElement = document.getElementById('last-modified');
    lastModifiedElement.textContent = document.lastModified;
})