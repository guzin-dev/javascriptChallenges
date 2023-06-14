function filterNumbers(a) {
  return a.filter((e) => typeof e == "number");
}

console.log(filterNumbers(["Js", 2, "hoje", 4, 5, 7, "teste"]));