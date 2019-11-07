var solution = function(arr, k){
  length = arr.length;
  if(k == length) return arr;

  result = arr.slice(0, k );

  for(let i = 1; i <= length - k; i++){
    tempArr = arr.slice(i, k + i);

    for(let j = 0; j < tempArr.length; j++){
      if(tempArr[j] > result[j]){
        result = tempArr;
        break;
      }
    }
  }

  return result;
}

  console.log(solution([1,4,4,4,6, 7], 4));
// console.log(solution([]), 4);
