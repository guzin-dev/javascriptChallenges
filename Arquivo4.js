function inverseBooleanAndNumber(handleVar) {
  if (typeof handleVar == "boolean") return !handleVar;
  if (typeof handleVar == "number") return handleVar * -1;
  return "Tipo de variável não permitida";
}

console.log(inverseBooleanAndNumber(false));