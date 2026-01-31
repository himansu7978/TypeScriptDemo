// Access Modifirea
// public - It will accesss Any where 
// protect - it can be Access same class And Its child class
// private - it can access only the same class 


class Persone {

    public name:string;
    protected salary:number;
    private bankAccount:number;

    constructor(name:string,salary:number,bankAccount:number){
        this.name=name;
        this.salary=salary;
        this.bankAccount=bankAccount;
    }

    display(){
        console.log(`Name Of The Person ${this.name} Salary : ${this.salary} Account: ${this.bankAccount}`);
    }

}

class Employee extends Persone {

  private empId:string;

    constructor(name:string,salary:number,bankAccount:number,empId:string) {
        super(name,salary,bankAccount)
        this.empId=empId;
    }

    showEmployeeDitailes(){
        console.log("Employee Name :",this.name) //     public - Accessble
        console.log("Employye Id:",this.empId) //       private -- still we can Access since it is declared inside the same class 
        console.log("Emaloyee Sal :",this.salary) // Protected - can be asseccs becase it a child class of persone 
       // console.log("Employee Account",this.bankAccount) // private - cant be accessble becase private propert form another class

    }
}

 let emp= new Employee("Himansu",10000,123456,"S110")
 emp.display();
 emp.showEmployeeDitailes()



 
