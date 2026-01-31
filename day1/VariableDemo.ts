
// var vs let vs const

/*  
1.Scope
2.Declaration/Value Assignment
3.re-declareation
4.Re-Initialization/Re-Assingment
5. Hoistig
*/

//var - we do not use this in Modern JS/TS  .Avoid Var because it has A Functional Scope and Can lead to Unexpected error

//let -We Use it Whenever the Requirment is need to change variable

//const - we use this When the Requirment is  do not need to change variable/ This Value Don Not Change

// 1) Scope (Functional Scope (var)) (Block Scope (let,const))

//Example 1 (Functional Scope (Var))

/*
function functionalScope(){

    if(true){
        var msg ="Hello World"
        console.log(msg);
    }

}
functionScope();

*/


//Example 2 (Block Scope)
/*
function blockScope(){
if(true){
    let msg="New Msg ";
    const value=1;
    console.log(msg)
    console.log(value)
    }

    console.log(msg) // Can Not Acess Out side block becase it is a block scope
    console.log(value) // Can Not Acess Out side block becase it is a block scope
}

*/

// Example 3 
/*
function blockScope(){
if(true){
    const msg="Message Displayed"
    console.log(msg);
}
console.log(msg); // Can not Access out oside block

}

*/

/* function blockScopeDif(){

    if(true){
        var a=10;
        let b=20;
        const c=40;
        console.log(a+" "+b+" "+c)
    }
 //      console.log(a+" "+b+" "+c) // only var can Accepted let And const can not Be Acceptable becausethis variable are block Scope
}

blockScopeDif();
 */

/* 

// Declaration/ value Assignment

var x; //var can be declare without initialization
console.log(x) // undefined
x=10
console.log(x) // 10 

let y; // let can be declare without initialization
console.log(y) // undefined
y=20;
console.log(y) // initialize 20


 // const must be intialize at the time of declaration
//const z; // incorrect
const t=30; // courrect

console.log(t)

 */

// Re-Declaration

 // var allows re-declaration
 // let and const does not allow Re -declaration  (Making Code Safer)
/* 
 // Example
  var x=89;   
  var  x=78;
  console.log(x)

    let t=37;
    let t=89;// Re-declaration is Not possible
  console.log(t);
 */

  // Re-Initialization / re-Assignment

  // Var And Let variable re initialization allows
  // const not allow re initialization

  // Example
/* 
  var a =70
   a=90;
   console.log(a)

  let b=90;
  b=56;
  console.log(b) */

//   const age=30
//   const age=67; // not allowing to Re -Initialize

// Hosting  Before Assigned The  variable  if we trying to acess the variable 
/* 
console.log(a) // Undefined
var a=10
console.log(a);
 */
/* 

console.log(a) //Cannot access 'a' before initialization in case of Let variable
let a=10
console.log(a); // 
 */

/* console.log(a) //Cannot access 'a' before initialization in case of Let variable
const a=10
console.log(a); //  */









