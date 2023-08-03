// class Employee{
//     constructor(){
//         console.log("Employee")
//     }
//     getID(){
//         return 12;
//     }
// }
// class person extends Employee{
//     constructor(){
//         super();
//         console.log("Person")
//     }
//     getName(){
//         return "Sumi";
//     }
// }
// let personObj=new person();
// console.log(personObj.getName());
// console.log(personObj.getID());


//this, super, constructor

class Employee{
    constructor(name){
        this.fullName=name;
    }

    getName(){
        return this.fullName;
    }
}
class person extends Employee{
    constructor(name,id){
        super(name);
        this.id=id;
    }
    getId(){
        return this.id;
    }
}
let personObj=new person("Sumi","S737");
console.log(personObj.getName());
console.log(personObj.getId());

