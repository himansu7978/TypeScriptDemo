// ################# forEach(),map(),filter(),reduce(),some(),every() ####################

//1.forEach()-- it will exucutes a function once for each array element
//  it takes function as A Parameter
// Syntax: forEach(function(currentvalue,index,array){
    //code
//})

/* Currentvalue - the currentvalue being processedin the Array
   index(optional)- The Index Of The Current Elements being processed in the Array
   array(optional)- the Array the Current elements belongs to
 
 */

   let fruit:string[]=["apple","Mango","Papeya","Crerry","orange"]

    console.log("Printing Fruits Along With index using for in loop ")

   for(let i in fruit){

    console.log(i,fruit[i])

   }

   console.log("Printing Fruits Along With index using forEach() method...")

   fruit.forEach(function(element,index){

    console.log(`${index}`,`${element}`)
    //  console.log(index,element) // Approach2

   })

   // using Arrow Function

   console.log("Printing Fruits Along With index using forEach() method.. using Arrow function =>.")

   fruit.forEach((element,index)=>{

    // console.log(`${element}`,`${index}`) // approch 1
    console.log(index,element) // Approach2

   })

   // example 3 covert the element into uppercase using foreach method

        fruit.forEach((element)=>{

            console.log(element.toUpperCase())
        })

// map() - it will create a new Array with the Result of calling the function on every element of an Array
// it will take function as A Parameter 
// return the Same numbeer of elements that we have in original Array 

// Synatax : array.map(function(currentvalue,index(optional),array(optional)))

  console.log("get squre of all the number in an array  using Map() method")


  let num:number[]=[1,2,4,6,8]
  let sqrnumber=num.map(function(ele){

      return  (ele*ele)
  })
  console.log("Original Arrays :",num)
  console.log("Squre of The Numbers :",sqrnumber)


  // Double Each number ex[1,2,3,4,5]--- [2,4,6,8,10]

  let doublenum=num.map((ele)=>{

    return ele*2
  })
  console.log("Double Array :",doublenum)


let triple=num.map((ele) =>  ele*3);  // if you have single retun statement  inside the arrow function then  {} and 'return are optional 
console.log("Triple :",triple)


// 3.filter() - it will  also create a new array with all the element that we pass/satisfy the functon
// it will take function as a Parameter 
// it will return either same or fewer number of elements compared to original Array 

// Synatax : array.filter(function(currentvalue,index(optional),array(optional)))


// ex 1 get the only even number from an Array 

 let evennumber=num.filter((num)=> num%2==0)
 console.log("Even Numbers :",evennumber)

 let graterthan3=num.filter((num)=> num>3)
 console.log("Graterthan three :",graterthan3)


 //4.reduce()- applies a function on every element of an Array and return a single value 
 // Synatax : array.reduce(function(accumulator,currentvalue,index(optional),array(optional)))

 // example 1 get the Total (sum) of all the Element  in an Array  

 let total:number=0;

 for(let i=0;i<num.length;i++){
    total=total+num[i]
 }
 console.log("Sum of all the Numbers :",total)


 // Using reduce() method

  let reduseres=  num.reduce((total,ele) =>
    {
         return  total+ele;

    },0) //Here  zero is defalt value of accumuleter but if you want to give other than zero that time you have to specify 

 console.log("Sum of the Element in an Array :",reduseres)

//ex2
 let reduseres1=  num.reduce((total,ele) => total+ele,0)
 console.log("Sum of the Element in an Array :",reduseres1)


 // some() - check if any element satisfies a Condition
 // return true if at least one element passes the Condition ,else false 
 // Synatax : array.some(function(currentvalue,index(optional),array(optional)){})


 // Example 1 Check array contains nagetive values

 let value:number[]=[-1,1,3,5,6,78,5]

   let negetiveValue= value.some((ele)=> ele<0 )
    console.log("Does Array Contains Negetive value :",negetiveValue)

       let hasPosetive= value.some((ele)=> ele>0 )
        console.log("Does Array Contains Posetive value :",hasPosetive)


// every()- It will check All the Codition if All The Condition pass it will return true , if any one condition got failed it will return failed
// Synatax : array.every(function(currentvalue,index(optional),array(optional)){})

 let hasevery= value.every((ele)=> ele%2==0 )
 console.log("are all numbers are even : ",hasevery)

