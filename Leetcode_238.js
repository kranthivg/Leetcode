var productExceptSelf = function (nums) {
  //     let prefixArray=[],postfixArray=[],pre=1,post=1,res=[]
  //     for(let i=0;i<nums.length;i++){
  //         pre*=nums[i]
  //         prefixArray[i]=pre
  //     }
  //     for(let j=nums.length-1;j>=0;j--){
  //         post*=nums[j]
  //         postfixArray[j]=post
  //     }
  //     res[0]=postfixArray[1]
  //     res[nums.length-1]=prefixArray[nums.length-2]
  //     for(let i=1;i<nums.length-1;i++){
  //         res[i]=prefixArray[i-1]*postfixArray[i+1]
  //     }
  //     return res
  let res = [],
    pre = 1,
    post = 1
  for (let i = 0; i < nums.length; i++) {
    res[i] = pre
    pre *= nums[i]
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= post
    post *= nums[j]
  }
  return res
}
