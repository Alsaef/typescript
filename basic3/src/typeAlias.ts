
type Profile={
    myname:string,
    location:{
        country:string,
        division?:string,
        district:string,
    },
    phoneNumber:number
}

const profile:Profile={
    myname:'ratul',
    location:{
        country:'bangladesh',
        division:'dhaka',
        district:'narsingdi'
    },
    phoneNumber:192873322
}
const profile2:Profile={
    myname:'ratul',
    location:{
        country:'bangladesh',
        district:'narsingdi'
    },
    phoneNumber:192873322
}


type Num=(num1:number,num2:number)=>number

const add:Num=(num1,num2)=>{
  return num1+num2
}