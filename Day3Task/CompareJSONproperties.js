let obj1={name:"Person 1",age:5};
let obj2={age:5,name:"Person1"};

function compareObj(obj1,obj2){
    if(Object.keys(obj1).length!=Object.keys(obj2).length){
        return false;
    }
    for(key in obj1){
        if(!obj2.hasOwnProperty(key)||obj1[key]!==obj2[key]){
            return false;
        }
    }
    return true;
}
const result=compareObj(obj1,obj2);
console.log(result);