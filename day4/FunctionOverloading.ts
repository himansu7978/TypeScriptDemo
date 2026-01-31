
// Function Over Loading 
 
// Function Overloding 3 things Are important

/**
 * 1.Write a Signature of the Funaction
 * 2.implement  A Function
 * 3.Calling A Function
 */


// Example 1 // Different parameter type(data types)

// Function Signature 
console.log("Different parameter type(data types)")
function getInfo(id:number):string;
function getInfo(name:string):string;

//function implemention

function getInfo(para:number|string):string{

    if(typeof para==="number")
    {
        return(`User id Is ${para}`)
    }
    else{
        return(`User Name is ${para}`)
    }
}

// Calling Function
console.log(getInfo(101))
console.log(getInfo("Himansu"))

// Example 2 Different number of Parameter 

function add(a:number , b:number): number;
function add(a:number , b:number,c:number): number;


function add(a:number,b:number,c?:number):number
{
    if (c!==undefined){

        return a+b+c;
    }
   return a+b;
}
console.log("Different number of Parameter ")
 console.log(add(10,20))
 console.log(add(10,20,30))


 //Example 3 Different return  Types

 function processInput(str:string):string;
 function processInput(id:number):number



 function processInput(input :number|string):string|number
 {
        if(typeof input==='string')
        {
            return input.toUpperCase()
        }
        else{
           return input*2
        }
 }
 console.log("Different return  Types Examples")

    console.log(processInput("Welcome"));
    console.log(processInput(5));

// Exaple 4

function greet(name:string):string
function greet(age:number):string
function greet(isMarried:boolean):string;


function greet(value: string|number|boolean):string
{
    if( typeof value==="string")
    {
            return (`Name Of The person : ${value}`)
    }
    else if(typeof value==="number")
    {
        return(`Age of The Person : ${value}`)
    }
    else{
        let res:string=value? "married":"unmarried"
        return res;
    }
}
console.log("Example 4")
console.log(greet(34));
console.log(greet("Himansu"));
console.log(greet(true));
console.log(greet(false));



 
