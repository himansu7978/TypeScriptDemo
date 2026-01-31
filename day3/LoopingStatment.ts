
// Print 100 number using While loop

//Syntax 

/**
 * while(Condition){
 *  statement
 * }
 */

let n:number=1

while(n<=5){
  console.log(n)
  n++
}

//Print Even number 1......10

console.log("Print Even Number 1...10 ")

//logic 1
let num:number=2;
while(num<=10){

  console.log(num);
  num+=2 // num=num+2;
}

//logic 2
let i:number=1;
console.log("Print Even Number btn 1 to 10")
while(i<=10){

  if(i%2==0){
    console.log(i)
  }
  i++;
}

// print odd number between 1 to 10

//logic 1

let odd:number=1;

console.log("Print odd Number btn 1 to 10")

while(odd<=10){
  console.log(odd)
  odd+=2 //odd=odd+2
}

//logic 2
console.log("Print odd Number btn 1 to 10")
let odd1=1;

while(odd1<=10){
  if(odd1%2!=0){
    console.log(odd1)
  }
  odd1++;
}

console.log("print the 10..1")

let oposite:number=10;


while(oposite>=1){

  console.log(oposite)
  oposite--;
}

// Do While loop - Always Exucute at least onec before checking the Condition


console.log('Do While Loop')

/**
 * Syntax
 * 
 * do{
 *   statement()
 * }while(Condition)
 * 
 */
let no:number=10
do{
  console.log(no)
  no--
}while(no>=1)






