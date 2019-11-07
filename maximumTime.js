//https://leetcode.com/discuss/interview-question/396769/
var giveMeMaxTime = (string) => {
  hour1 = string[0];
  hour2 = string[1];
  minute1 = string[3] == "?" ? 5 : string[3];
  minute2 = string[4] == "?" ? 9 : string[4];

  if(hour1 == '?' && hour2 == '?'){
    hour1 = 2;
    hour2 = 3;
  }

  if(hour2 == "?"){
    hour2 = hour1 == 2 ? 3 : 9;
  }

  if(hour1 == "?"){
    hour1 = hour2 <= 3 ? 2 : 1;
  }

  console.log(`${hour1}${hour2}:${minute1}${minute2}`);
}

giveMeMaxTime("23:5?");// 23:59
   giveMeMaxTime("2?:22");// 23:22
   giveMeMaxTime("0?:??");// 09:59
   giveMeMaxTime("1?:??");// 19:59
   giveMeMaxTime("?4:??");// 14:59
   giveMeMaxTime("?3:??");// 23:59
   giveMeMaxTime("??:??");// 23:59
   giveMeMaxTime("?4:5?"); //14:59
   giveMeMaxTime("?4:??"); //14:59
   giveMeMaxTime("?3:??"); //23:59
   giveMeMaxTime("23:5?"); //23:59
   giveMeMaxTime("2?:22"); //23:22
   giveMeMaxTime("0?:??"); //09:59
   giveMeMaxTime("1?:??"); //19:59
   giveMeMaxTime("?4:0?"); //14:09
   giveMeMaxTime("?9:4?"); //19:49
