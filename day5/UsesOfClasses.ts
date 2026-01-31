
/*1. Class
  2.Read only Properties
  3.Optional Properties
  4.Static property/variables And Methods
        1. static property/Methods are common/shared across all the objects 
        2.static prorpty and method can be assees through class name directly 
        3.static propr=erty and method can be modify using calss
        


*/

class Students{
       readonly sid:number;  // read only property (can only be assigne oce , inside the constrctor)
                sname:string; // regular property
                email?:string; // Optional Property     
        static schoolName:string="Hey Himansu" // static variable shered among all instances /objects



        //constructor
        constructor(sid:number,sname:string,email?:string){

                this.sid=sid;
                this.sname=sname;
                this.email=email;

        }
        //method
        dispalay () :void {
                
                console.log('SID: ',this.sid)
                console.log('SName: ',this.sname)

                if(this.email){

                        console.log('Email :',this.email)
                }
                else{
                        console.log("Email is Not Provided");
                }
                console.log("School Name :",Students.schoolName)
        }
        // static  method 
        static changeValue(value:string):void{

               Students.schoolName=value;
        }

}

        let stu  =new Students(101,"Himansu");
        let stu1  =new Students(101,"Himansu","email.gmail.com");

        console.log(stu.dispalay());
        console.log(stu1.dispalay());
    
        Students.changeValue("Hey Satish");
        console.log(stu.dispalay());
     