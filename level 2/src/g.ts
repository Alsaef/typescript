{

    // generic type


    const numArray:Array<number>=[12,455,542,32132]
     numArray.pop()
    console.log(numArray)




// generic array advance

type GenericArray=string;

const stringArray:Array<GenericArray>=['MR.X',"MR.Y"]

console.log(stringArray)

// generic array advance two

type BoleGenericArray=Array<boolean>

const boleArray:BoleGenericArray=[true,false]

}