{




    interface Developer<param,T> {


        name:string;

        Pc:{
            brand:string;
            ram:string;
        }
      smartWatch:param,
      bike?:T
    }


    interface SmartWatch{
        brand:string
    }

    const developer:Developer<SmartWatch,null>={
     name:'ratul',
     Pc:{
        brand:'Asus',
        ram:'8gb'
     },
     smartWatch:{
        brand:"apple"
     }
    }
    const developer2:Developer<SmartWatch,null>={
     name:'ratul',
     Pc:{
        brand:'Asus',
        ram:'8gb'
     },
     smartWatch:{
        brand:"apple"
     }
    }


    console.log(developer)


}