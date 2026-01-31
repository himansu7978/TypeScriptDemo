// Method Overloading And Constructor overloading in type Script 

class Calculater {

    // constructor OverLoading
    constructor(); // Default constructor 
    constructor(a:number,b:number); // Parameterised constructor 

    constructor(a?:number ,b?:number){
        if(a!==undefined && b!==undefined){

            console.log('Sum Of A & B :',(a+b))
        }
        else{
            console.log("Default Cnstructor Executed");
        }
    }

    add(a:number,b:number):number
    add(a:number,b:number,c:number):number


    add(a:number,b:number,c?:number):number{

        if(c!==undefined){
            return a+b+c;
        }
        else{
            return a+b;
        }
    }

}
// this is foe Constructor OverLoading
let calculator=new Calculater();
let calculator2=new Calculater(10,490);

// This Is For Method Over loading

console.log(calculator.add(10,39));
console.log(calculator.add(10,39,89));




