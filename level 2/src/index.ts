{

    // type assirtion


    // let names:any;

    // (names as number).


    const showType=(value:string|number):string|number|undefined=>{
        if (typeof value ==='string') {
           const convert=parseFloat(value) 
           return `string to number ${convert}`
        }
        if (typeof value==='number') {
           return value
        }
    }

    const result1=showType(54321) as number
console.log(result1);


type Message={
    message:string|unknown
}

try {
    
} catch (error) {
    console.log((error as Message).message)
}

}