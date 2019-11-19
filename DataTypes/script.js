var frankFamilyBill1 = 124;
var familyBill = 48;
var frankFamilyBill3 = 268;

if (familyBill < 50) {
  console.log(familyBill + familyBill * 0.2);
} else if (familyBill <= 50 && familyBill < 200) {
  console.log(familyBill + familyBill * 0.15);
} else {
  console.log(familyBill + familyBill * 0.1);
}
