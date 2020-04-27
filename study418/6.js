//비구조화 할당
//const {name, age} = objectArray[0]
const myName1=({name,age})=>{
    console.log
}

//기본 할당
const myName = (name='보경', age='23') => {
    console.log(`${name} : ${age}`)
}

myName()
