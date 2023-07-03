var skills={"users":[
    {
    "AutomationTool" : "Selenium Web driver",
    "ProgrammingLanguage" : "Core Java",
    Frameworks : "TDD, CuCumber (BDD), KDD",
    Browsers : "Chrome, Firefox, Microsoft Edge",
    Documentation : "Microsoft Office(Word, Power point, Excel)"
 },
 {
    "AutomationTool" : "Selenium",
    "ProgrammingLanguage" : "Java",
    Frameworks : "TDD, CuCumber (BDD)",
    Browsers : "Chrome, Firefox",
    Documentation : "Microsoft Office(Word, Power point)"
}]
}


//For Loop
console.log("For loop:")
for(let i=0;i<skills.users.length;i++){
    console.log(skills.users[i].Documentation);
}
console.log("\n")

//for in
console.log("For in:")
for(let key in skills.users){
        console.log(skills.users[key].Frameworks)
}
console.log("\n")

//For of
console.log("For of:")
for(let [index,element] of skills.users.entries()){
    console.log(index+":",element.Browsers)
}
console.log("\n")

//forEach
console.log("forEach:")
skills.users.forEach((a)=>{
    console.log(a.AutomationTool)
})
