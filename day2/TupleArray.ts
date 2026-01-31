// Tuples In TypeScripts
// A Tuple Is A Fixed Length array where Is Elelment has Specific  Data Types
// It Helps in Storing Multiple fields Of diffent data types Together 


// Exaples tuple with 2 values String And Number 

console.log("tuple with 2 values String And Number ")
let person:[string,number]=["john",1];

console.log(person) //for All The Values 
console.log(person[0]) // for first value 
console.log(person[1]); // for Second Value

// Example 2 Tuple With Multiple Values
console.log('Tuple With Multiple Values')

let user:[number,string,boolean,string,]=[101,"john",false,"Hellow"]

console.log(user)

//example 3 iterating over a tuple using traditional for loop 

console.log(' iterating over a tuple using traditional for loop')


    for(let i=0;i<user.length;i++)
    {
        console.log(user[i])
    }

// Exaple 4 iterating over a tuple using for in loop (index Based Iteration)
console.log("iterating over a tuple using for in loop (index Based Iteration)")

for(let i in user)
{
    console.log(user[i])
}

// Exaple 5 iterating over a tuple using for of loop (Values Based Iteration)
console.log("iterating over a tuple using for in loop (Values Based Iteration)")

for(let value of user)

{
    console.log(value)
}
 
// Example 6 Tuple Array (Array Of Tuples)

console.log("Combination Of Array And Tuple")

let student:[number,string] []=[ [101,"Piter"],
                                                [102,"john"],
                                                            [103,"mialan"],
                                                                             [104,"allen"]   ]

          console.log(student.length)    // it will give how many tuples having inside an Array            
          console.log(student)          // it will give all The Data 
          console.log(student[1])    //   it will give specific data   
          

          // if u want to extact one data inside a tuple
          let tp=student[0];
          console.log(tp[0])//101
          console.log(tp[1])//piter