var johnsHeight, marksHeight, johnsMass, markMass;

johnBMI = johnsMass / (johnsHeight * johnsHeight);
markBMI = markMass / (marksHeight * marksHeight);

// BMI = mass/ height * height;1

if (markBMI > johnsMass) {
  console.log('Markes BMI is greater');
} else {
  console.log('Johns Bmi is greater');
}
