// function whatDoYouDo(job, firstName) {}

var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case 'Teacher':
      return firstName + ' teaches students';
    case 'Developer':
      return firstName + ' makes apps';
    case 'Designer':
      return firstName + ' makes beautiful websites';
    default:
      return firstName + ' does somthing else';
  }
};

console.log(whatDoYouDo('Developer', 'Frank'));
