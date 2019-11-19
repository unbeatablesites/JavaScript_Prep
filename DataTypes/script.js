function tipCalculator(bill) {
  var percentage;

  if (bill < 50) {
    percentage = 0.2;
  } else if (bill <= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

// var familyBill = [124, 48, 268];

// var allThreeTips = function(familyBill)

// console.log(familyBill);

// console.log(function(allThreeTips));
// console.log(function(allThreeTotals))
