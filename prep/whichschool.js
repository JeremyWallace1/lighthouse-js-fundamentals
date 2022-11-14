const whichSchool = function (age) {
  // This is the function to determine which school to attend
  if (age < 13) {
    return "Elementary School";
  } else if (age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
}
console.log(whichSchool(100));