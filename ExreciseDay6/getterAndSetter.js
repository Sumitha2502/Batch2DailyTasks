class operation{
    constructor(name){
        this.firstName=name;
    }
    get name(){
        return this.firstName;
    }
    set name(newName){
        this.firstName=newName;
    }
}
let obj=new operation("Sumi")
console.log("Before",obj.name)
obj.name="Jeni"
console.log("After",obj.name)


//-------------------------------------------
class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    getRadius(){
      return this.radius;
      };
    setRadius(value){
      this.radius = value;
      };
    getColor();
    setColor();
    
    getArea(){
      return Math.PI * this.radius * this.radius;
      };
    getCircumference(){
      return 2 * Math.PI * this.radius;
      };
  }
  
  let cir = new Circle(1.0, "red");


  //-------------------------------------------
   
  class Movie {
    constructor(title, studio, rating = "PG"){
      this.title = title;
      this.studio = studio;
      if(rating === "")
      {
        this.rating = "PG";
      }
      else {
        this.rating = rating;
      }
    }
    
    getPG(arr) {
      return;
    }
  }
  
  let film = new Movie("Casino Royale", "Eon Productions", "PG13");
  let ipArr = [{title:"", studio: "", rating: ""},
                {title:"", studio: "", rating: ""},
                {title:"", studio: "", rating: ""}];
  film.getPG(ipArr);