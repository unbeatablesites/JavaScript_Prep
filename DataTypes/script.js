var johnsHeight, marksHeight, johnsMass, markMass;

marksHeight = 1.69;
markMass = 78;
johnsMass = 92;
johnsHeight = 1.95;

johnBMI = johnsMass / (johnsHeight * johnsHeight);
markBMI = markMass / (marksHeight * marksHeight);

// BMI = mass/ height * height;1

if (markBMI > johnsMass) {
  console.log('Marks BMI is greater');
} else {
  console.log('Johns Bmi is greater');
}
