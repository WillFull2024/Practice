//  Write a function called multiplier that accepts an array of numbers as an argument, 
// and returns an array of each number multiplied by itself.  
// If the imput array is empty, return a 0

// function multiplier(xfactor){
    // xfactor[4] = 1;
   //  xfactor.pop();
    //test if array xfactor is empty
   // if (xfactor.length == 0){
       // return 0;
   // }
    // for (let index = 0;index < xfactor.length;index++) {
        // console.log(index,xfactor[index]);
        // ****reassigned element at index to new value
        // xfactor[index] = xfactor[index] * xfactor[index]; 
   // }  
    //console.log(xfactor)
    // return xfactor;
// };
function adder(xtc){
    let temp = ["test",'just','peple','cars']
    console.log(temp)
    console.log(temp[3], temp[1], temp[0])
    for (let i = 0;i < xtc.length;i++){
        xtc[i] = (xtc[i] * 2) + xtc[i];
    }
    if (xtc.length == 0){
        return -1;
    }
    return xtc
    // console.log(adder);
}
// const arr1 = [1,3,6,3,4,7,9]
// console.log([4,6,7,8])
console.log( adder([]) );
// console.log([1,3,6,3,4,7,9])
// console.log(multiplier([3,7,2,5,9,6]));

//  Write a function called adder that accepts an array of numbers as an argument, 
// and returns an array of each number adding 2 times the number to itself.  
// If the imput array is empty, return a -1