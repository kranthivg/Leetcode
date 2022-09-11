var getSum = function (a, b) {
  // let result=0,carry=0
  // for(let i=0;i<=32;i++){
  //     bit1=a>>i&1
  //     bit2=b>>i&1
  //     result=result|((carry^bit1^bit2)<<i)
  //     if((bit1&bit2===1)||(bit1&carry===1)||(bit2&carry===1)){
  //         carry=1
  //     }else{
  //         carry=0
  //     }
  // }
  // return result
  while (b != 0) {
    let prevA = a
    let prevB = b
    a = prevA ^ prevB
    b = (prevA & prevB) << 1
  }
  return a
}
