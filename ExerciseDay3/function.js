var a=10; //global scope

function test(){
    var a=20; //local scope
    console.log(a);
}

function test2(){
    var a=30;
    console.log(a)
}

test();
test2();
console.log(a)