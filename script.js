// Conversion rates
const conversionRates = {
    USD: 1,
    INR: 84.07,
    JPY: 149.34
  };
  
  document.getElementById('tipForm').addEventListener('input', updateTipCalculator);
  
  function updateTipCalculator() {
    const billInput = document.getElementById('billTotal');
    const tipSlider = document.getElementById('tipPercentage');
    const tipDisplay = document.getElementById('tipPercentDisplay');
    const tipAmountDisplay = document.getElementById('tipAmount');
    const totalWithTipDisplay = document.getElementById('totalWithTip');
    const currency = document.getElementById('currency').value;
    const errorMessage = document.getElementById('errorMessage');
  
    // Validate Bill Total input
    let billTotal = parseFloat(billInput.value);
    if (isNaN(billTotal) || billTotal < 0) {
      errorMessage.textContent = 'Please enter a valid positive number for the bill total.';
      tipAmountDisplay.value = '';
      totalWithTipDisplay.value = '';
      return;
    } else {
      errorMessage.textContent = '';
    }
  
    // Tip Percentage
    const tipPercentage = parseFloat(tipSlider.value);
    tipDisplay.value = `${tipPercentage}%`;
  
    // Calculate Tip Amount and Total
    let tipAmount = (billTotal * tipPercentage) / 100;
    let totalWithTip = billTotal + tipAmount;
  
    // Convert amounts based on currency selection
    tipAmount *= conversionRates[currency];
    totalWithTip *= conversionRates[currency];
  
    // Display results with two decimal places
    tipAmountDisplay.value = `${tipAmount.toFixed(2)} ${currency}`;
    totalWithTipDisplay.value = `${totalWithTip.toFixed(2)} ${currency}`;
  }