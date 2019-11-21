var frank = {
  firstName: 'Frank',
  lastName: 'Smith',
  birthYear: 1984,
  familyMembers: ['Ike', 'Katie', 'John', 'Vicky'],
  job: 'developer',
  isMarried: true,
  calcAge: function() {
    this.age = 2019 - this.birthYear;
  }
};

frank.calcAge();

console.log(frank.familyMembers);

// console.log(frank.firstName);
// console.log(frank['lastName']);
// var x = 'birthYear';
// console.log(frank[x]);

// frank.job = 'Designer';

// console.log(frank.job);

// console.log(frank);

// // function tipCalculator(bill) {
// //   var percentage;

// //   if (bill < 50) {
// //     percentage = 0.2;
// //   } else if (bill >= 50 && bill < 200) {
// //     percentage = 0.15;
// //   } else {
// //     percentage = 0.1;
// //   }
// //   return percentage * bill;
// // }

// // tipCalculator(48);
// // console.log(tipCalculator(10));

// // var bill = [124, 48, 268];
// // var tip = [
// //   tipCalculator(bill[0]),
// //   tipCalculator(bill[1]),
// //   tipCalculator(bill[2])
// // ];

// // console.log(tip);
// // var finalValue = [
// //   tipCalculator(bill[0]) + bill[0],
// //   tipCalculator(bill[1]) + bill[1],
// //   tipCalculator(bill[2]) + bill[2]
// // ];
// // console.log(finalValue);
