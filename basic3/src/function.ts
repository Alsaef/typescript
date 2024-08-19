{/* function
1:function

2:arrow function=>

*/


function add(number1:number,number2:number=10):number {
    return number1+number2
}

const result=add(1)

console.log(result)

const array:number[]=[1,3,23,12]

const neArr=array.map((elem:number):number=>elem*elem)
}
