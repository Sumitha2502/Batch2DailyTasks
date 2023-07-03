console.log("Print odd numbers in an array: ");
//Anonymous function:
console.log("Using Anonymous function: ");
let arr=[11,12,13,14,15,16,17,18,19,20];
let odd=function(){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            console.log("Odd Numbers from 11 to 20:",arr[i]);
        }
    }
}
odd(arr);

console.log("Using IIFE: ");
//IIFE:
(function(array){
    for(var i=0;i<array.length;i++){ 
    if(array[i]%2!==0){
        console.log("Odd Numbers from 21 to 30:",array[i]);
    }
}
}
)([21,22,23,24,25,26,27,28,29,30]);

console.log("Using Arrow function:")
//Arrow function:
let oddNumbers=[31,32,34,35,36,37,38,39,40];
let odd1=()=>{
    for(var i=0;i<oddNumbers.length;i++){
        if(oddNumbers[i]%2!==0){
            console.log("Odd Numbers from 31 to 40:",oddNumbers[i]);
        }
    } 
}
odd1(oddNumbers);

console.log("\n");

console.log("Convert all the strings to title caps in a string array: ");
console.log("Using Anonymous function: ");
//Anonymous function:
let strArray=["sumitha","full stack developer"];
let str=function(){
    for(let i=0;i<strArray.length;i++){
        res=strArray[i].charAt(0).toUpperCase()+strArray[i].slice(1);
        console.log(res);
    }
}
str(strArray);

//IIFE:
console.log("Using IIFE: ");
let stringArr=["pRogramming language"];
let input=stringArr[0].split(" ");
(function(string1){
    let output=[];
    for(let i=0;i<input.length;i++){
    let string2=input[i].toLowerCase();
    string2=string2.charAt(0).toUpperCase()+string2.slice(1);
    output.push(string2)
    }console.log(output.join(" "));
})(input);

//Arrow function
console.log("Using Arrow function:")
let strgArray=["welcome to coding"];
let strg=()=>{
    for(let i=0;i<strgArray.length;i++){
        res=strgArray[i].charAt(0).toUpperCase()+strgArray[i].slice(1);
        console.log(res);
    }
}
strg(strgArray);

console.log("\n");

console.log("Sum of all numbers in an array: ");
console.log("Using Anonymous function: ");
//Anonymous function:
let numArray=[23,5,67,80];
let addition=function(){
    let sum=0;
    for(let i=0;i<numArray.length;i++){
       sum=sum+numArray[i];     
    }  console.log(sum)
}
addition(numArray);

//IIFE
console.log("Using IIFE: ");
(function(sumArray){
    let sum1=0;
    for(let i=0;i<sumArray.length;i++){
       sum1=sum1+sumArray[i];     
    }  console.log(sum1)
})([9,7,3,1,2,5]);

//Arrow function
console.log("Using Arrow function:")
let numArray1=[3,4,5,6,7,8,9];
let addition1=()=>{
    let sum2=0;
    for(let i=0;i<numArray1.length;i++){
       sum2=sum2+numArray1[i];     
    }  console.log(sum2)
}
addition1(numArray1);

console.log("Return all the prime numbers in an array:")
console.log("Using anonymous function")
//anonymous function
