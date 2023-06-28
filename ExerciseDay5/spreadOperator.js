function getSum(a,b,c){
    return a+b+c;
}

var arr=[10,20];
var arr2=[30];
console.log(...arr,...arr2);

var res=getSum(...arr,...arr2);
console.log(res);
