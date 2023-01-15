let myArray = [1, 2, 3, 4];
const newArray = myArray.map(el => el + 1);
let pointerArray = myArray;
console.log(myArray);
console.log(pointerArray);
console.log(newArray);

pointerArray = pointerArray.map(el => el - 1);
console.log(myArray);
console.log(pointerArray);
console.log('###########');
let copy1 = [...myArray];
console.log(copy1);
copy1.push(99);
console.log(copy1);
console.log(myArray);

let deepArray = [['codeCamp'], ['test']];
let shallowCopy = deepArray.slice(0);
shallowCopy[0].push('is great');
shallowCopy[1].push('not');
shallowCopy[2] = ['123'];
console.log('######')
console.log(deepArray);
console.log(shallowCopy);

// DEEP copy

let deepCopy = JSON.parse(JSON.stringify(deepArray));
deepCopy[0].push('is BEST');
console.log(deepArray[0],deepCopy[0]);