const packArray = (integers) => {
  let result = [...integers];
  console.log(result);
  let iteration = 1;

  while (result.length > 1) {
    const arr = [];
    for (let i = 0; i < result.length; i = i + 2) {
      if (iteration % 2 === 0) {
        if (isNaN(result[i + 1])) {
          arr.push(result[i] * 1);
        }
        else {
          arr.push(result[i] * result[i + 1]);
        }

      } else {
        arr.push(result[i] + result[i + 1]);
      }
    }
    result = arr;
    console.log(result);
    iteration = iteration + 1;
  }

  return result[0];
};

console.log(packArray([4, 1, 2, 1, 1, 1]));