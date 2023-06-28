//copy by reference(object)
var a={name:"Sumi",age:"26"}
var b=a;

console.log("before", a.age);

b.age=24;
console.log("After",a.age);


//copy by reference(Array)


//copy by value

var a=10;
var b=a;
console.log(a);
b=20;
console.log(b)
console.log(a);

