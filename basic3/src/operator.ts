{
// 




type User={
    name:string,
    adress:{
        city:string
        parmanentAdress?:string
    }
}


const user:User={
name:"ratul",
adress:{
    city:'dhaka',
}
}
// 'nullish operator'
const Adressing=user?.adress?.parmanentAdress??'no parmanent adress'

console.log(Adressing)






// 



}