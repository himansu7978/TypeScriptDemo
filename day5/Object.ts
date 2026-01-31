/**
 * Object
 * -------------
 * 1.object is contains properties And Beheviour
 * 2.object contains variable and methods
 * 3.object is a Collection of key And Value pairs
 * 
 * #####  Different Ways to Create an Object ####
 * 1.Using Object type - directly define the values for variables 
 * 2.InLine Type Object- We Also define the datatype of the keys 
 * 3.Using Type of Aliases
 * 4.Using The Clases
 */

// 1.Using Object type - directly define the values for variables for ts/js

    // The TypeScript object type represent all the Values that are not in premitive type 

    let employee =

    {   name:"Himansu"
        ,age:25
        ,sal:17000
        ,dept:"IT",
    
            getDetailes:function():string{

                // console.log(this.name,this.sal,this.dept,this.age)
                return `name is ${this.name} age is ${this.age} sal is ${this.sal}`;
            }
    
    
    }

    //accessing the object approach 1 (using . notation )
    console.log(employee.name,employee.age,employee.sal,employee.dept); // indivisual 
    console.log(employee.getDetailes()); // total details

    // approach 2 (using Braket notaion)
    console.log(employee["name"],employee["sal"]);
    console.log("Using () Notaion ",employee["getDetailes"]())

    //To Modify value  the Object 
    employee.sal=17200;
    employee.name="Suroj";


    //  * 2.InLine Type Object- We Also define the datatype of the keys  only for TS

    let student:
    {
        name:string,
        age:number,
        dept:string,
        grade:string,
        
        getSummary: ()=>{}

    }=
    {
        name:"Hiamsnsu",
        age:25,
        dept:"Science",
        grade:"A",

        getSummary:function ()
        
        {
            
            return ` Name is ${this.name} Age is  ${this.age}  Dept is ${this.dept} And grade ${this.grade} `
        }

    }


    console.log(student.getSummary())

    // problem with Inline Type Object : need to Be repeat the sturture  again and Again 


    let student1:
    {
        name:string,
        age:number,
        dept:string,
        grade:string,
        
        getSummary: ()=>{}

    }=
    {
        name:"Suroj",
        age:29,
        dept:"Science",
        grade:"A",

        getSummary:function ()
        
        {
            
            return ` Name is ${this.name} Age is  ${this.age}  Dept is ${this.dept} And grade ${this.grade} `
        }

    }
    console.log(student1.getSummary())

    // Using tyoe as 'Aliases" TS : Allow creating a new Name for an exiting type  
    
    
    type product={
        name:string,
        price:number,

        getInfo:()=>string

    }

    let book1:product={

            name:"Java",
            price:199,

            getInfo: function():string{
                return `Name Of The Product ${this.name} price is ${this.price}`
            }
    }

    let book2:product={

            name:"Python",
            price:299,

            getInfo: function():string{
                return `Name Of The Product ${this.name} price is ${this.price}`
            }
    }

    let book3:product={

            name:"Playwright",
            price:599,

            getInfo: function():string{
                return `Name Of The Product ${this.name} price is ${this.price}`
            }
    }

    console.log(book1.getInfo())
    console.log(book2.getInfo())
    console.log(book3.getInfo())


    //using loop 

    // for(let i in book1){
    //     console.log(book1.name)
    //     console.log(book1.price)
    // }


    // intersection Type 

    type person={
        name:string,
        age:number,
    }
    type contact={
        mob:number,
        email:string,

    }

    type candidate =person & contact &
    {
        getinfo:()=> string
    }

    let candidates:candidate={
        name:"Himansu",
        age:26,
        mob:9090856015,
        email:"abc@gmail.com",

        getinfo: function():string{

            return `name ${this.name} age ${this.age} mob ${this.mob} email ${this.email}`

        }
    }
    console.log(candidates.getinfo())

    //4. Using Class 

    class user {
        
        name:string;
        id:number;
        job:string;
        sal:number;

        constructor(name:string,id:number,job:string,sal:number){

            this.name=name;
            this.id=id;
            this.job=job;
            this.sal=sal;
        }

          getUserData():string{
            return `Name :${this.name} Id: ${this.id} Job:  ${this.job} Sal: ${this.sal}` 
       }

    }

    let user1=new user("Himansu",101,"Analyst",6000);
       console.log(user1.getUserData());
    let user2=new user("Mahendra",101,"Analyst",5000);
       console.log(user2.getUserData());

// 









