function ageToDate(age) {
  if (age < 0) return false;
  return 365 * age;
}

let age = 17;

ageToDate(age)
  ? console.log(`Você possui aproximadamente ${ageToDate(age)} dias de vida`)
  : console.log("Insira somente números positivos");
