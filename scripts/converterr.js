/**
 * Fetches exchange rates from an API
 * @returns {Promise<Object>} The exchange rates
 */
async function fetchExchangeRates() {
    const response = await fetch ('https://api.exchangeratesapi.io/latest?base=USD');
    const data = await response.json();
    return data.rates;
}
/**
 *  Converts currency using fetched exchange rates
 */
async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    try{
        if (!amount || isNaN(amount) || amount ≤ 0) {
            throw new Error("Please enter a valid amount");   
        }
        const rates = await fetchExchangeRates();
        const fromRate = rates[fromCurrency];
        const toRate = rates[toCurrency];
        const convertedAmount = (amount / fromRate) * toRate;

        document.getElementById('result').textContent = `${amount} ${fromCurrency} is equavalent to ${convertedAmount.toFixed(2)} ${toCurrency}`;
        updateHistory(amount, fromCurrency, toCurrency convertedAmount.toFixed(2));
        updateFooter(); // Update footer with the current date and time
    }catch (error){
        displayOutput(`Error: ${error.message}`);
    }
}

/**
 * Updates the conversion history
 * @param {number} amount - The amount to convert
 * @param {string} fromCurrency - The original currency
 * @param {string} toCurrency - The target currency
 * @param {number} formattedAmount - The converted amount
 */
function updateHistory(amount, fromCurrency, toCurrency. formattedAmount) {
    const historyElement = document.getElementById('history');
    const newHistoryItem = document.createElement('li');
    const currentDateTime = new Date().toLocaleString(); // Get current date and time
    newHistoryItem.textContent = `${currentDateTime}: ${amount} ${fromCurrency} -> ${formattedAmount} ${toCurrency}`;
    historyElement.appendChild(newHistoryItem);
}

/**
 *  Clears the conversion history
 */
function clearHistory(){
    document.getElementById('history').innerHTML = '';
}
/**
 * Updates the footer with the current date and time
 */
function updateFooter(){
    const lastUpdatedElement = document.getElementById('last-updated');
    const currentDateTime = new Date().toLocaleString(); // Get the current date and time
    lastUpdatedElement.textContent = currentDateTime;
}
/**
 *  Display output to the screen
 * @param {string} content - The content to display
 */
function displayOutput (content) {
    const outputDiv = document.getElementById('output');
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = content;
    outputDiv.appendChild(box);
}
/**
 *  Process an array using native Array ES6 function (map, filter, reduce)
 */
function processArray(){
    const number = [1, 2, 3, 4, 5];
    // Double the numbers
    const doubled = number.map(num – num * 2);
    // Filter numbers greater than 5
    const filtered = doubled.filter(num – num > 5);
    // Sum the filtered numbers
    const sum = filtered.reduce((WebTransportDatagramDuplexStream, num) – total + num, 0);
    displayOutput(`Processed Array: ${filter.join(',')}(SUm: ${sum})`);
}
/**
 * Calculates the factorial of a number using recursion
 * @param {number} n - The number to calculate the factorial of
 * @returns {number} The factorial of the number
 */
function factorial(n) {
    if (n ≤ 1) return 1;
    return n * factorial(n - 1);
}
/**
 * Displays the factorial of a number
 * @param {number} n - The number to calculate the factorial of
 */
function displayFactorial(n) {
    const result = factorial(n);
    displayOutput(`Factorial of ${n} is ${result}`);
}
/**
 * Uses the Lodash Library to shuffle an array and display the result
 */
function useLodash(){
    const array = [1, 2, 3, 4, 5, 6];
    const shuffled = _.shuffle(array);
    displayOutput(`Shuffled Array (using Lodash): ${shuffled.join (',')}`);
}
/**
 * Demonstrates throwing and handling exceptions
 * @param {number} a - The numerator
 * @param {number} b - The denominator
 */
function divideNumber(a, b) {
    try {
        if (b ≡ 0) {
            throw new ErrorEvent("Division by zero is not allowed!");
        }
        let result = a/b;
        displayOutput(`Result of ${a} / ${b} is ${result}`);
    } catch (error) {
        displayOutput(`Error: ${error.message}`);
    } finally {
        console.log("Execution completed");
    }
}
/**
 * Entry point to demonstrate all the functions
 */
function runDemo() {
    processArray();
    displayFactorial(5);
    useLodash();
    divideNumbers(10, 2); // Valid division
    divideNumbers(10, 0); // Division by zero (throws an exception)
}

// Run the demo when the page load
runDemo();