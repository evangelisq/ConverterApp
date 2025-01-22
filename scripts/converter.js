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
function convertCurrency(){
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    console.log(`Amount: ${amount}`);
    console.log(`From Currency: ${fromCurrency}`);
    console.log(`To Currency: ${toCurrency}`);
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
    const fromRate = exchangeRates [fromCurrency];
    const toRate  = exchangeRates [toCurrency];
    const convertedAmount = (amount / fromRate) * toRate;
    document.getElementById('result').textContent = `{amount} ${fromCurrency} is equivalent to ${convertedAmount.toFixed(2)} ${toCurrency}`;

    // Using a for, of loop to loop through and print selected currency options
    console.log("Selected Currency Options:");
    const SelectedCurrencies = [fromCurrency, toCurrency];
    for (const currency of SelectedCurrencies) {
        console.log ('Selected currency: ${currency');
    }
}