const addituion=(num1:number=10,num2:number=90)=>{
   return num1+num2
}

const call=addituion(2,2)

// console.log(call)  


const cars=(...car:string[]):void=>{
 car.map(c=>console.log(c))
}

cars('bike','gari','cng','flyCar','autoriksha')