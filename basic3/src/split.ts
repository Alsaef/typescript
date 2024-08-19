import { Agent } from "http"

{

const javascriptFramwork:string[]=['react js','express js','angular js']
const pythonFramwork:string[]=['Flax','fast api','drf','django','fast']

javascriptFramwork.push(...pythonFramwork)

console.log(javascriptFramwork)


const user1={
    name:'ratul',
    age:21
}
const user2={
    name:'al saef',
    age:22
}

const users={
...user1,...user2
}

console.log(users)





const restOperator=(...friends:string[])=>{
    console.log(`hi ${friends}`)
    return `hi ${friends}`
}




console.log(restOperator('hablu','bablu'))
}