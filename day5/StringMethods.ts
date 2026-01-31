
/** String - String is A Text value or Combination Of Character
 * 
 * 1.Single Quote -- String literal ('single Quote')
 * 2.Double Quote -- String literal ("Double Quote")
 * 3.Backtick (``) -- String template - When We Use to string variable inside anather string value `${variable}`
 * 4.index in string start with zero 
 * 
 * we can use '' or "" or ``
 *
 */

// Declaration of string 

let str1:string='This Is A String with Single Quote';
let str2:string="This Is A String with double Quote";
let str3:string=`This Is A String Using Single Quote`;

console.log(str1)
console.log(str2)
console.log(`msg :${str3}`)
 

// length - this an Attrubte Whic is used to find the lenght of the String(how Many nuber of charecter)

let str:string="Hello, TypeScript!";

console.log(str.length); //18

// toUppercase() and toLowercase()

console.log("Upper Case :",str.toUpperCase())
console.log("Lower case",str.toLowerCase())

//charAt(index) and indexOf(string)

console.log("CharAt method :",str.charAt(3)) //l
console.log("IndexOf() ",str.indexOf("T"))// 7

// substring(Start index, End index)

console.log(str.substring(0,5))// hello

// includes() it will return true/false and String value is Case Sesentive

console.log(str.includes("abc")) // false 
console.log(str.includes("TypeScript")) // true


//startsWith() and endsWith() this will return boolean value (true,false)

console.log(str.startsWith("Hello"));
console.log(str.endsWith("Hello"))


// replace()
//Hello, TypeScript!  -- Hello JavaSpript

console.log("Replaed String  ",str.replace("TypeScript","JavaScript"))


// split() - it will break the String into multiple part based on the delimeter ,and return an Array 

//exaple1
let word1:string[]= str.split(" ")
console.log("After Spliting :",word1) //[ 'Hello,', 'TypeScript!' ]

//example 2
let mystring:string= "himansu@gmail.com,himansu";
let myarray:string[]=mystring.split(",")

console.log("Email id : ",myarray[0])
console.log("Password : ",myarray[1])


// trim() ,trimStart() ,trimEnd()

let trims:string=" Welcome into Typescript "
 console.log("Original String :",trims)
 console.log("Using Of Trim() ,method :",trims.trim()); // it will remove all the spaces 
 console.log("using Of trimStart() method :",trims.trimStart()) // it will remove only the begining spaces
 console.log("using Of trimEnd() method :",trims.trimEnd())  // it will remove the ending spaces 


 // concat() - it will join the string two or more string

  console.log ("After Concatination :",str.concat(str2));
  console.log(str.concat(str1).concat(str2));  // more than one string cancat

  // concept of string imutability(Can't change the original Value )

  let imu:string="We are ";
  let imu1:string="Family";

  console.log(imu.concat(imu1))

  console.log(imu) //We are -- Original value Cant be change 

  // MultiLine String

  let multi:string=`Hey
                        Himansu
                               sahoo`;

    console.log(multi);



//     let employees={name:"john",age:30,sal:17200,deg:"Software",

//        getdetails: function(){
        
//         return `${this.name}is a ${this.age} `

//    }
   
// }
// console.log(typeof employees)
// console.log( employees.name)













