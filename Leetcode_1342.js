var numberOfSteps = function (num) {
  // let count=0
  // while(num!==0){
  //     if(num%2==0){
  //         count+=1
  //         num=num/2
  //     }else if(num%2==1){
  //         count+=1
  //         num-=1
  //     }
  // }
  // return count
  return numberOfStepsHelper(num)
}
function numberOfStepsHelper(num) {
  if (num === 0) {
    return 0
  }
  if (num % 2 === 0) {
    num = num / 2
  } else num -= 1

  return 1 + numberOfStepsHelper(num)
}
