//Named function

function add(a,b){
    return a+b;
}
console.log("result: ",add(5,6));

//IIFE:--it is also anonymous fn
//(function(a,b){
(function(){
    var msg="hello!!!";
    console.log(msg)
})();

//arrow fn--we wont gv name so it is anonymous fn

var arr=(a,b)=>{
    console.log("Empty arrow fn",a+b)
}
arr(1,1);

//Anonymous fn

var display=function(){
    console.log("anonymous fn called")
}
display();