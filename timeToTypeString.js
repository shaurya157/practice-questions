var solution = (string) => {
  index = 97; //Char code of 'a'
  result = 0;
  for(let i = 0; i < string.length; i++){
    currIndex = string.charCodeAt(i);
    result += Math.abs(currIndex - index);

    index = currIndex;
  }

  return result;
}

console.log(solution('z'));
