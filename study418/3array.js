//배열
const array = [1,2,3,4,5]

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

console.log(objectArray)
console.log(objectArray.length)

objectArray.push({name : '꼬꼬', age:1}) //배열안에 값 추가

console.log(objectArray)
console.log(objectArray.length) //배열의 길이

console.log(objectArray[0])
console.log(objectArray[1])
console.log(objectArray[2])

//배열의 반복문

//for-of 문 -> 배열에 관한 반복문
let numbers=[10,20,30,40,50]
for(let num of numbers){
    console.log(num)
}

//for-in 문 -> 객체를 위한 반복문
const doggy={
    name : '멍멍이',
    sound : '멍멍',
    age:2
}
for (let key in doggy){
    console.log(`${key} : ${doggy[key]}`)
}


//연습
const sumOf = (number) =>{
    let sum=0
    for (let i=0;i<number.length;i++){
        sum+=number[i]
    }
    return sum
}

const result = sumOf([1,2,3,4,5])
console.log(result)

//연습
const biggerThanThree=(number) => {
    let arr = []
    count=0;
    for(let i=0;i<number.length;i++){
        if(number[i]<3) {
            count++
            continue
        }
        arr[i-count]=number[i]
    }
    return arr
}

const arr2=[1,2,3,4,5,6,7]
console.log(biggerThanThree(arr2))