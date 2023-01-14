// var c=20;
// console.log(c);




// console.log(func(8));

// function func(a) {
//   let print = `Functia are continut de test cu valoarea: ${a}`;
//   return print;
// }

let = arr = [1, 0, 9, 8, 5, 6, 1, 2, 2];
console.log(arr);

for (let i = 0; i < arr.length-1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let aux = arr[i];
      arr[i] = arr[j];
      arr[j] = aux;
    }
  }
}

console.log(arr);

const total = arr.reduce((accumulator, currValue) => {
  console.log(`total: ${accumulator} si valoarea curenta: ${currValue} `);
  return accumulator + currValue;

},0 );

console.log(total);

