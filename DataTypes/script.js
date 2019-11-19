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

tipCalculator(48);
console.log(tipCalculator(48));
