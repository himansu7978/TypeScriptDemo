

// Super() -- used to invoke/call immediate parrent class Constructor 

// super - is a key which is used to invoke/call immediate the parent class method 
// super - can not be used to call the parent class property  (In java  it is posssible.


class Parent {

  num:number=10;

  constructor(){
    console.log("This is Parent class Constructor ")
  }

  display(){

    console.log("This Is Parent class Method" )
  }


}

class Child extends Parent {

    num:number=29; // overriden the value 

    constructor(){
        super() // This Will call Parent Class Constructor (Must Be Called)
        console.log("This is Child Class Constructor ")
    }

    // Override Methods
    show(){
    
      // console.log(super.num) // parent num / Ts Does not support sipper.num to access parent class property directly like java 
       console.log( this.num);
       console.log("This Is Child Class Method ")
    }



    display(){
        super.display() // This Will invoke the parent class method 
        // console.log("This Is Child Class Method ")
    }

}

let child= new Child();

child.show()
child.display()
