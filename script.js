// Function to calculate and display tip, total bill, and amount per person
function calculateAndDisplay () {
  // Get the input values from the HTML form
  let bill = parseFloat(document.getElementById('totalBill').value)
  let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
  let serviceQuality = document.getElementById('serviceQuality').value

  // Calculate tip, total bill, and amount per person using helper functions
  let tip = calculateTip(bill, serviceQuality)
  let totalBill = calculateTotalBill(bill, tip)
  let amtPerPers = calcAmtPerPrs(totalBill, numOfPpl)

  // Display the results in the HTML document
  document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
  document.getElementById('totalBillResult').innerText =
    'Total Bill: $' + totalBill.toFixed(2)
  document.getElementById('amtPerPersonResult').innerText =
    'Amount per person: $' + amtPerPers.toFixed(2)
}

// Helper function to calculate tip based on bill amount and service quality
function calculateTip (bill, quality) {
  if (quality === 'Great') {
    return bill * 0.2
  } else if (quality === 'Good') {
    return bill * 0.15
  } else if (quality === 'Poor') {
    return bill * 0.1
  } else {
    // Default case: return 0 for invalid or empty input
    return 0
  }
}

// Helper function to calculate total bill by adding the original bill and tip
function calculateTotalBill (bill, tip) {
  return bill + tip
}

// Helper function to calculate amount per person by dividing total bill by the number of people
function calcAmtPerPrs (totalBill, numOfPpl) {
  return totalBill / numOfPpl
}
