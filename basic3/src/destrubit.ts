

const myProfile:{
    myname:string,
    location:{
        country:string,
        division:string,
        district:string,
    },
    phoneNumber:number
}={
    myname:'ratul',
    location:{
        country:'bangladesh',
        division:'dhaka',
        district:'narsingdi'
    },
    phoneNumber:192873322
}

const {myname,phoneNumber,location:{country}}=myProfile
console.log(myProfile)

const myListUser:[object,object,object]=[
    {
        name:'ratul',
        email:'saef@gmail.com'
    },
    {
        name:'ratul1',
        email:'saef1@gmail.com'
    },
    {
        name:'ratul2',
        email:'saef2@gmail.com'
    },
]

const printuser=myListUser.map(u=>console.log(u))