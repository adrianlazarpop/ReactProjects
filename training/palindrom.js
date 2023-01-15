const palindrom = (input) => {
  const arr = input.toString();
  let reverse='';
  for (i=arr.length-1; i>=0; i--){
    reverse+=arr[i];
  }  
  if (arr===reverse){
    return true;
  }
    return false;
}

console.log(palindrom('teet'));


