// Anonymous Function (Also called As Nameless/UnNamed Function)

// An Anonymous Function is A Function That Does not have A Name , Instead it is assign to a variable which is act like its name 


/* Syntax
 let variable = function(Parameter)
 {
    // Function bodyy
 }

 variablename() // for calling the Function 

*/

//Example 

let msg = function(){
    console.log('Anonymous Function')
}
msg()

    // anonymous Function With Sigle Parameter 
let Anonymous= function(name:string){

    console.log("Name :",name)
}

Anonymous("Hii")

// anonymous Function With 2  Parameter 
let division= function(a:number,b:number):number{

    return a/b;
}
console.log(division(10,2))

// Arrow Function / Lambda Function

/**
 * Lambda refers to anonymous Function in programing
 * Lamda Function are a cosise mechanisim to represent Anonymous function
 * These function are Also called As Arrow Function
 * 
 * 
 * There Are A 3 parts to a Lamda Function
 * 1. A Function May optionally Have Parameter
 * 2. The fat arrow notation/ lambda Notaion (=>) it is also called as goes to Operator
 * 3. Statement - represent the Function introduction set
 * 
 *     Syntax 
 *          
 *          let variable () =>
  *             {
  *                     // block of code
  * 
  *              }
  *               variable()
 */

// Example 1 Arrow Function With no Parameter And No Return Type 

         let arrow=():void =>
         {
            console.log('Hellow TypeScripct')
         }
            arrow()

//Example 2 Arrow Function With Parameter and Return type

         let adition=(a:number,b:number):number =>{

                return a+b;
         }
        console.log( adition(10,60));

// Example 3 Arrow Function With Implicit retun type

         let add1=(a:number,b:number)=> a+b;
         let mod=(a:number,b:number)=> a*b;

         console.log(add1(10,10));
         console.log(mod(20,5));

// Example 4 Arrow Function with Optional Parameter

     let  optionalpara=(name:string,id:number,mailid?:string):void =>
      {
        console.log("Name : ",name)
        
        console.log("ID : ",id)

        if(mailid!==undefined){
            console.log("mailID : ",mailid)
        }
     

      }
      optionalpara("jaga",110)

      // Example 5 Arrow Function With Defalt Parameter

            let defalt=(price:number,rate:number=0.10):void =>{

                let dicoun1= price*rate;
                console.log(dicoun1)
            }
            defalt(300)


// Example 6 Arrow function With rest Parameter -- Multiple Types find out HOW many element present an array

        let multipleparameter=(...num:(number| string )[]) :number =>
        {

                return num.length;

        }
       console.log( multipleparameter(10,20,29))
       console.log( multipleparameter("Jay","jaganatth","Sri",234))

       
//Example 4 Named Function With Rest Parameter

let  find1=(...ele:number[]):void =>
{
    let i;
    let sum:number=0;

    for(i=0;i<ele.length;i++){

        sum=sum+ele[i];
    }
    console.log('Sum of the Number '+sum)

}
find1(5,7,9.8)
find1(90,87,65,54,65)