//doubt


var person={
    firstName:"Sumi",
    lastName:"V",
    getName:function(){
        var FirstName="Jeni";
        var LastName="V";
        console.log("Inner",this.firstName+" "+this.lastName)

    
        var print=function() {
            console.log("Outer",this.FirstName+" "+this.LastName)
        }
        print();
    }
}
    
person.getName();