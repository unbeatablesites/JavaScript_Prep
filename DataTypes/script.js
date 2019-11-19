function calculateAge(birthYear) {
  return 2018 - birthYear;
}

// var ageFrank = calculateAge(1984);
// var agemike = calculateAge(1985);
// var ageMary = calculateAge(1986);
// var now = 2019;

// console.log(ageFrank, ageMary, agemike);

function yearsUnitlRetirement(birthYear, firstName) {
  var age = calculateAge(birthYear);
  var retirmentAge = 65 - age;

  if (retirmentAge < 0) {
    console.log(firstName + ' Has already retired');
  } else {
    console.log(firstName + ' will retire in ' + retirmentAge + ' years');
  }
}

yearsUnitlRetirement(1950, 'Frank');
