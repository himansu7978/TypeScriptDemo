
let numbers:number[]=[10,20,49,45,32];
let cars:string[]=["Thar","Belono","Wangnor","KIA","Tiago"];


console.log("Number Array",numbers)
console.log("Cars Arrays",cars)

//length - it a Attribute (not a Method)
console.log("It will return Size Of An Arrays : ",cars.length)
console.log("It will return Size Of An Arrays : ",numbers.length)


// 1 push() -if you want to add sigle/multiple element if you dont know of the index of an Array then we go for this method
//  Syntax - array.push(ele1,ele2,ele3) it will add the element end of an Array

// example 
console.log("Number Array before push",numbers)
numbers.push(12,14);
console.log("Number Array after push ",numbers)

// 2 pop() - it will remove the last element from an array.
// Syntax array.pop()

    let lastNumber=numbers.pop();
    console.log("After Removed last Element",numbers)
    console.log("removerd Element is :",lastNumber)


// 3 shift() - it will remove the first element from an Array
// Syntax : Array.shift()

let FirstNumber=numbers.shift();
console.log(" Aftermo remove first element",numbers);
console.log("Removed Element is :", FirstNumber)

// 4.unshift()- it will add single /multiple   elements to the begining  of  an array
// Syntax : Array.unshift()

let newcarname=cars.unshift("Harior");
console.log("After Addig The Car name  ",cars)

//5. cancat() - it will Combine Two Or More Array
// Syntax; Array.concat(Arrr1,array2...nth array

let combine=numbers.concat([19,89],[34]);
console.log("After Combine :",combine)


/* 6.slice()- Extracting a section of an Array 
        1.Starting index start from zero
        2.Ending index can be Exclusive Ex: if 3 is ending index it will be consider as 2 (3-1=2)
        Syntax: array.slice(start,end);

*/
console.log(cars)
let extractedArray=cars.slice(1,3);
console.log("After Extarct :", extractedArray)// [ 'Thar', 'Belono' ]

// splice() - It will add/remove elemnts from an Array (from Everywhere)
// Syntax: array.splice(start,delete,ele1,ele2,....nthele)

//ex1 only removing
console.log("Current Cars present in an array :",cars)
let removedcars=cars.splice(1,2)// here 1 is the Starting index and 2 is represnting how many elemets to be removed
console.log("After Splice(1,2)",cars);
console.log("Removed Elelmets ;",removedcars)

//Example 2 Not Removed But Added
console.log("Current Cars present in an array :",cars)
let adddcars=cars.splice(1,0,"SUV","fartuner");
console.log("Aftr Adding Cars :",adddcars)

// example 3 Both remove And Add
 cars.splice(1,2,"Nexa","EV CAr")
 console.log("After Splice ",cars)

 //indexOf() -- Finds The Index Of An Element ,if The Element not Found it will return -1
 //Syntax: array.indexOf(searchelement ) or array.indexOf(searchindex,staring index )

 //Ex 1 
 let KIAIndex=cars.indexOf('KIA')
 console.log("Index Of KIA",KIAIndex);

 //ex 2 if the value not presenet in an Array it will return as -1
 let defenderindex=cars.indexOf("Defender")
 console.log("Index Number Of Defender:",defenderindex) //-1


 //ex3 
 KIAIndex=cars.indexOf('KIA',2)
 console.log("Index Of KIA",KIAIndex);


 // inculdes() - It will check the elemnet is present or not (true/false)
 //Syntax:array.includes(searchEement,index)

    let fruits:string[]=["Apple","Banana","Cherry","DragonFruit"]
    console.log(fruits.includes("Cherry"))//true
    console.log(fruits.includes("Papeya"))//False

// toString()- It will convert Array to String Format
// Syntax: array.toString()
  let numberString=numbers.toString();
  console.log("Converted Array to String ",numberString)








 










