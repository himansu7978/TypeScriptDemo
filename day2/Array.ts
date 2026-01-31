
// Array in TypeScript

/**
 * 1.Array is A Special type Of Variable Which can Store Single Or Multiple values  At A time 
 * 2.The Value Can Be Same Or different data Types
 * 3.Array Are Declare Using "[]" or the Generic Array<T> type.
 * 4.Array Support Indexing Which Is Start From 0
 * 5.Array are an Ordered Collection Elements.
 * 
 */

// Declaring Array 

//Approch 1 Using data Types

 let arr:number[]=[10,20,30,40];

 console.log(arr)

 //Approach 2

 let names:Array<string>=["Himansu","Vignesh","Jashwant","Sai"]
 let empId:Array<number>=[101,102,103,104]
 let nameAndId:Array<number | string>=[101,"Himansu",102,"Vignesh"]
 let mixdata:Array<any>=[101,'Radhe',"Sam",null,true]



 console.log(names)
 console.log(empId)
 console.log(nameAndId)
 console.log(mixdata)

// using for loop extract the Data 
console.log("Using For Loop ")

 for (let i=0;i<names.length;i++){

        console.log(names[i])
 }

 // Itterating using for in loop follow the indexing concept (index)

 console.log("Using For in Loop  ")

 for(let k in empId){ // K is Act like Index 

    console.log(empId[k])
 }


 // itterating using for of loop  (values)

 console.log("Using For of  Loop   ")

 for (let i of mixdata){

    console.log(i)
 }


 // Using Function takes An Array And Reeturn An Array 

 function capitalizeWord(arr:string[]):string[]
 {
    let res:string[]=[];

    for(let i=0;i<arr.length;i++){

        res[i]=arr[i].toUpperCase()
    
    }
        return res;

 }
  let word:string[]=["Hii","Hello","World","Hey"]
  console.log(capitalizeWord(word))


  function fruit(ar:string[]):string[]
  {
   let result:string[]=[];

   for(let i=0 ;i<ar.length;i++){

      result[i]=ar[i]
   }
   return result;
  }

  let fruits:string[]=["Apple","Banana","Cherry","Dragon fruit",]

  console.log(fruit(fruits))