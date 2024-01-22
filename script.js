function calculateAndDisplay () {
  let bill = parseFloat(document.getElementById('totalBill').value)
  let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
  let serviceQuality = document.getElementById('serviceQuality').value

  let tip = calculateTip(bill, serviceQuality)
  let totalBill = calculateTotalBill(bill, tip)
  let amtPerPers = calcAmtPerPrs(totalBill, numOfPpl)

  document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
  document.getElementById('totalBillResult').innerText =
    'Total Bill: $' + totalBill.toFixed(2)
  document.getElementById('amtPerPersonResult').innerText =
    'Amount per person: $' + amtPerPers.toFixed(2)
}

function calculateTip (bill, quality) {
  if (quality === 'Great') {
    return bill * 0.2
  } else if (quality === 'Good') {
    return bill * 0.15
  } else if (quality === 'Poor') {
    return bill * 0.1
  } else {
    //alert("Please enter a valid value")
    return 0
  }
}

function calculateTotalBill (bill, tip) {
  return bill + tip
}

function calcAmtPerPrs (totalBill, numOfPpl) {
  return totalBill / numOfPpl
}
