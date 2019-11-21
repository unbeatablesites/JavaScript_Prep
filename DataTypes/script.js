var frank = {
  fullName: 'Frank Uzoka',
  mass: 92,
  height: 195,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var john = {
  fullName: 'John Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

frank.calcBMI();
john.calcBMI();
console.log(frank, john);

if (frank.bmi > john.bmi) {
  console.log("Frank's BMI is higher");
} else if (john.bmi > frank.bmi) {
  console.log("John's bmi is higher");
} else {
  console.log('They are both the same');
}
console.log(frank.bmi, john.bmi);
