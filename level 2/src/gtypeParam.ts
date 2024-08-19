{



    type GenericArray<param>=Array<param>


    const StringArray:GenericArray<string>=['ratul','nahid','ataul']

    const boleArray:GenericArray<boolean>=[true,false]

  

    type UserObject={
        name:string;
        age:number;
    }

    const user:GenericArray<UserObject> =[
        {
            name:'ratul',
            age:21
        },
        {
            name:'A s ratul',
            age:21
        }
    ]





}