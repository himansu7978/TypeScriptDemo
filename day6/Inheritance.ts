//Inheritance
// A Class Can reuse the properties and method of another class
// ineheritance is a Mechanisim where one class (child) can inherit the properties and methods of another class(parent)
//inheritanace allows you to reuse the functionality of an existing class without rewrite it .


 // parent class
class Car{

        name:string;
        colour:string;
        model:string;

    constructor(name:string,colour:string,model:string){
            this.name=name;
            this.colour=colour;
            this.model=model;

    }

    start(){
        console.log("Car Started")
    }

    stop(){
        console.log("Car Stop")
    }

    displayInfo(){

        console.log(`Name: ${this.name} Colour: ${this.colour} Model: ${this.model}`)

    }

}
    // Child Class
class Tata extends Car {

    year:number;

    constructor(year:number,name:string,colour:string,model:string){
        super(name,colour,model)
        this.year=year;
    }

    // MethodOverriding
    start(): void {
        console.log("Tata Car about to start")
    }
    yom():void{
        console.log(`Year Of Manufature:${this.year} Name: ${this.name} Colour: ${this.colour} Model: ${this.model}`)

    }

}

class Maruti extends Car {

    year:Number;

    constructor(year:number,name:string,colour:string,model:string){
        super(name,colour,model)
        this.year=year;
    }
   // MethodOverriding
    start(): void {
        console.log("MarutiCar about to start")
    }
    yom():void{
        console.log(`Year Of Manufature:${this.year} Name: ${this.name} Colour: ${this.colour} Model: ${this.model}`)

    }

}


// creating object for Tata class (child class)

let tata= new Tata(2000,"Tata Nexun","Silver","2021");
console.log(tata.name)
tata.yom() // 
tata.start() // calling the child class method (Which is overrided)
tata.displayInfo() // assecing parent class method from child class // parent class method 
tata.stop();


//
let maru= new Maruti(2012,"Alto","red","2012");
maru.start()
maru.yom()



// Parent class variable holding child child class Object 

let car:Car= new Tata(2015,"New Car","Gold","2015")

car.displayInfo() // this is aceessale why becase this method prest in parent class /op-Name: New Car Colour: Gold Model: 2015
car.start() // override method got executed /op- Tata Car about to start
//car.yom() // this is not acepectable becase this method belons to only child class property does not exist parent / class


