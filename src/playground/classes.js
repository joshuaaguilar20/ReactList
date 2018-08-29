class Person{
 constructor(name = "Anonymous", age = 0){
        this.name = name;
        this. age = age;
 }
    gretting(){
     return `Hi my name is ${this.name} and my age is ${this.age}`
        }

}
    
class Student extends Person {
    constructor(name,age,major){
        super(name,age);
    
    this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    gretting(){
        let description = super.gretting();
        if(this.hasMajor()){
            description +=`  Their Major is  ${this.major}`
        }
        return description;
    }
    
}


class Traveler extends Person{
    constructor(name,age,location){
    super(name,age);
    this.location = location;
   
  }
    hasLocation(){
     return !!this.location;
    }
    superGreeting(){
        let greeting = super.gretting();
        if(this.hasLocation()){
         greeting += `and my location is ${this.location}`
  }
    return greeting;
 }
}







const me = new Traveler("Joshua",26,);
    console.log(me.superGreeting());


const other = new Traveler(undefined, undefined, "noWhere");
console.log(other.superGreeting());






//create a new class called Traveler that extends the person class. 
//Add Support For Home Location
//OverRide greeting - if Home Location Include Message 
//Hi I am Joshua. I Am visting from Kansas City. 
//