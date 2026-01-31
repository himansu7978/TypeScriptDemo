
// Function - It is Set of statament which is perform some specific task

// Named Function

function dispaly():void // Function without return type 
{
    console.log('Displsy Function executed')

}

dispaly() // Callling A Function Or Invoke A function

// Function With Return type 

function add(x:number,y:number):number
{

    return x+y;
}
console.log(add(20,7)) // one Way
let res:number=add(10,20)// 2nd Way 
console.log(res)

// Example 3 Named Function With rest  Multiple Parameter 

function findElemnts(...num:(String | number)[]):number
{
    return num.length
}
console.log(findElemnts(3,"Himansu",50,"Pravas"))

//Example 4 Named Function With Rest Parameter

function find(...ele:number[])
{
    let i;
    let sum:number=0;

    for(i=0;i<ele.length;i++){

        sum=sum+ele[i];
    }
    console.log('Sum of the Number '+sum)
}
find(5,7,9.8)
find(90,87,65,54,65)


// Named Functin With Optinal Parameter 
function optional(id:number,name:string,mailId?:string):void
{
    console.log("id : "+id);
    console.log("name : "+name)
    console.log("Email ID : ",mailId)

}

// optional(12,"Himansu","himansu2gmail.com") // U can give all parmeter value 
optional(11,"hello") // u can also give 2 parameter as well

// Nmaed Function With Default parameter

function discount(price:number,rate:number=0.50):void
{
    let discount:number=price*rate;
    console.log(discount)
}
discount(100); // its taking defalt value As 0.5
discount(50,0.20) // its taking explicily pasing the value


















