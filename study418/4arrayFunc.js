//배열 내장함수

//1. forEach -> 파라미터는 함수, 콜백함수 : 함수형태의 파라미터를 전달하는 것
const superhero = ['아이언맨', '캡틴', '토르', '닥터']

superhero.forEach(hero => {
    console.log(hero)
})

//2. map -> 배열안의 각 원소를 변환할때 사용, 새로운 배열 생성
const array = [1,2,3,4,5,6,7,8]
//--평소--
const squared=[]
for(let i=0;i<array.length;i++){
    squared.push(array[i]*array[i])
}
console.log(squared)
//--forEach사용--
const squared2 =[]
array.forEach(num=>{
    squared2.push(num*num)
})
console.log(squared2)
//--map 사용--
//const squared3 =[]
const square= n => n*n //변화함수
const squared3=array.map(square) //squeared3=array.map(n=>n*n)
console.log(squared3)

//--objectArray 예시--
const objectArray = [
    {
        name : '멍멍',
        age :2
    },
    {
        name : '야옹',
        age : 3
    }
]

const pro = ({name,age}) =>{
    return age!==2 && console.log(`${name} hi`)
}
const newF=()=>objectArray.map(pro)
newF()

//3. filter -> 걸러주는 것, 배열로 반환
const newArray = objectArray.filter(n=>n.age!=2) //-> age가 2가 아닌 것을 새롭게 array를 만들어라
console.log(newArray)

const todos=[
    {
        id:1,
        text:'java',
        done:true
    },
    {
        id:2,
        text:'func',
        done:true
    },
    {
        id:3,
        text:'array',
        done:true
    },
    {
        id:4,
        text:'arrayFunc',
        done:false
    }
]

const tasksDone = todos.filter(todo=>todo.done===true) //todo=>todo.done
console.log(tasksDone)

//4. indexOF
//배열안에 있는 값이 객체이거나 배열인 경우 findIndex()이용
const superheros=['아','캡','토','닥']
const index=superheros.indexOf('토') //토가 몇번째인지 알고싶다!
console.log(index)

//5. find -> 값 하나를 찾아내는 것, 값자체를 반환
//filter는 여러 데이터를 찾을때 이용(학급,반), find는 하나를 찾을때(이름)
const animal = objectArray.find(ani=>ani.name==='야옹')
console.log(animal)

//6. concat -> 배열 합칠때, 새로운 배열 반환
const arr1=[1,2,3]
const arr2=[4,5,6]
const newArr=arr1.concat(arr2)
console.log(arr1)
console.log(arr2)
console.log(newArr)

//7. ... -> 배열을 벗겨줘서 넣는 것
const newArr2=[...arr1, ...arr2]
console.log(newArr2)

//8. splice -> 배열에서 특정항목 제거
const numbers=[10,20,30,40,50]
const numIndex=numbers.indexOf(30)
numbers.splice(numIndex,1) //어떤인덱스, 그 인덱스로부터 몇개
console.log(numbers)

//9. slice -> 배열을 자름, 새로운 배열 반환
const sliced = numbers.slice(0,2) //0부터 2전까지
console.log(numbers)
console.log(sliced)

//10. shift & pop
// shift는 배열에서 첫번째 원소 추출, 추출후 배열에서 삭제, unshift는 앞에 추가
// pop은 마지막 원소 추출, push는 마지막에 추가

//11. join -> 배열안의 값들을 문자열 형태로 합쳐줌
const arr=[1,2,3,4,5]
console.log(arr.join())
console.log(arr.join(' '))
console.log(arr.join(', '))

//12. reduce
//--평소--
const number=[1,2,3,4,5]
let sum=0
number.forEach(n=>{
    sum+=n
})
console.log(sum)

//--reduce 사용--
//let sum2=number.reduce((accumulator, current)=>accumulator+current,0)
//콜백함수, 초기값
let sum2=number.reduce((accumultor, current)=>{
    console.log({accumultor,current})
    return accumultor+current
},0)
console.log(sum2)

//--평균구하기--
let avg=number.reduce((accumultor, current, index, array)=>{
    if(index===array.length-1){
        return (accumultor+current)/array.length
    }
    return accumultor+current
},0)
console.log(avg)

//연습-forEach
const countBiggerThanTenForeach=(numbers)=>{
    const num=[]
    numbers.forEach(n=>{
        if(n>10){
            num.push(n)
        }
    })
    return num.length
}
const countForeach=countBiggerThanTenForeach([1,2,3,5,10,20,30,40,50,60])
console.log(countForeach)

//연습-map : 음 안됨
const countBiggerThanTenMap=(numbers)=>{
    const funcMap = (n)=>{
        if(n>10){
            return n
        }
    }
    const num=numbers.map(funcMap)
    return num.length
}
const countMap=countBiggerThanTenMap([1,2,3,5,10,20,30,40,50,60])
console.log(countMap)

//연습-filter
const countBiggerThanTenFilter=(numbers)=>{
    const num=numbers.filter(n=>n>10)
    return num.length
}
const countFilter=countBiggerThanTenFilter([1,2,3,5,10,20,30,40,50,60])
console.log(countFilter)

//연습-reduce
const countBiggerThanTenReduce=(numbers)=>{
    return numbers.reduce((accumultor, current)=>{
        if(current>10){
            return accumultor+1
        }
        else{
            return accumultor
        }
    },0)
}
const countReduce=countBiggerThanTenReduce([1,2,3,5,10,20,30,40,50,60])
console.log(countReduce)