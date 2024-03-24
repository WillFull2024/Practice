
console.log(`I'm started immediately because I'm not in a function`)
function arr1(arr){
    test = [1,2,3,4,5]
    let newArr = test.pop(); // ***** called destructive: affects original array
    test.push(20);
    // Assignment use Shift and Unshifts Method listed in the W3C schools Array methods
    // ** write code here **
    const argo = test.shift();
    test.unshift(0,1);
    console.log(newArr, argo, test)
}

let testFunc = arr1();
// console.log (testFunc);

function abc(){
    let a2c = "The rain in Spain rains mainly on the Plain";
    for (let i = 0;i<a2c.length;i++){ // example of string method length
        console.log(a2c[i])
    } 
    a2c= "hello world"
    a2c.replace("hello","goodbye")
    console.log(a2c)

    let a3c=a2c.replace("hello","Goodbye") // example of string method replace()
return a3c
}
console.log(arr1([3,5,2,8,9]));
