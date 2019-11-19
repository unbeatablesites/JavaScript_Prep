var job = 'cop';
var firstName = 'Frank';
var age = 35;

switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy');
    break;

  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager');
    break;

  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man');
    break;

  default:
    console.log(firstName + ' is a man');
}
