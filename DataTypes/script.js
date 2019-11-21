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
