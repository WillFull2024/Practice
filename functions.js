
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

// let testFunc = arr1();
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
// console.log(arr1([3,5,2,8,9]));
// arrow function form for defining a function
const stringPlay = (strA, strB)=> {
    let strings = strB + " " + strA;
    return ("The string " + strA + " and " + strB + " together have a length of " + (strings.length -1).toString());
}
// console.log (stringPlay("Sunday","Monday"));

function myFunc(p1, p2){
    let arr1 = p1.split(" ");
    console.log(arr1);
    return (arr1.length + p2);
}
// console.log(myFunc("hello world. I am here.", 7))

// create a function that accepts 2 arguments. the first arg. is an array of numbers.  The 2nd arg is a number. The function should insert the 2nd arg into the end of a new array and return the final array and return the sum of the array values

function aFunc(p1,p2){
    p1.push(p2); // adds element to end of aaray
    let newArr = [...p1]; // ... is called spread operator.  Necessary to create true(deep) copy
    newArr.push(200);
    let arraySum = 0; // also called initializing a variable
    for (let element of newArr){ // element is an arbritrary variable name. should be descriptive
        arraySum = arraySum +  element; // short form is arraySum += element
        console.log(arraySum);
    }
    return(`newArr1 value: ${newArr} sum: ${arraySum} p1 value: ${p1}`);
}
console.log(aFunc([2,4,5,6,7,8], 99))


// for (let i=0;i<100;i++); array[i] becomes element
// for (let i of iterator)// i = element value
// for (let i in objects)











