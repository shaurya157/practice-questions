//https://leetcode.com/discuss/interview-question/394347/

var solution = (plants, capactiy1, capactiy2) => {
  if(plants.length == 0) return 0;
  refill = 2;
  can1 = capactiy1;
  can2 = capactiy2;
  i = 0;
  j = plants.length - 1;

  while(i <= j){
    if(i == j){
      result = (can1 + can2 == plants[i]) ? refill : refill + 1;
    } else {
      if(can1 < plants[i]){
        can1 = capactiy1;
        refill++;
      }
      if(can2 < plants[j]){
        can2 = capactiy1;
        refill++;
      }

      can1 -= plants[i];
      can2 -= plants[j];
    }

    i++;
    j--;
  }
  return refill;
}

console.log(solution([2,4,7,1,2], 5, 7));
