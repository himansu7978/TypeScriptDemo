

let age1:number=18;

if(age1>=18){

    console.log('you are Eligible for Vote :'+age1)
}
else{
    console.log('You Are Not Eligible for vote :'+age1)
}


// Else if 

let marks:number=66

if(marks>=90 && marks<=100){

    console.log('Grade A1')
}
    else if(marks>=80 && marks<90){

        console.log("Grade A")
    }
    else if(marks>=70 && marks<80){
        console.log('Grade B1')
    }
    else if(marks>=60 && marks<70){
        console.log('Grade B')
    }
    else{
        console.log('Grade c')
    }

    //Switch case

    let day:number=2;

    switch(day){
        case 1:
            console.log('Monday')
            break;
        case 2:
            console.log('Tusday')
            break;
        case 3:
            console.log('Wednesday')
            break;
        case 4:
            console.log('Thrushday')
            break;
        case 5:
            console.log('Friday')
            break;
        case 6:
            console.log('Saturday')
            break;
        case 7:
            console.log('Sunday')
            break;
            default:
                console.log('Invalid Day')

    }

    let fruit:string="Apple"

    switch(fruit){
        case "Apple":
            console.log('Fruit is Apple')
            break;
        case "Banana":
            console.log('Fruit is Banana')
            break;
         case "Mango":
            console.log('Fruit is Mango')
            break;
        default:
            console.log("Unkmown Fruit")
            

    }



