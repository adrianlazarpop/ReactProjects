const squareDigits = (num) => {
  const string = num.toString();
  let result = "";
  for (let i = 0; i < string.length; i++) {
    result += string[i] ** 2;
  }

  return parseInt(result);
};

console.log(squareDigits(123));


