//함수
function sum1(num1, num2){
    return num1+num2
} //이거를 이젠 다르게 하자

const sum2 = (num1, num2) => {
    return num1+num2
} //'=>'가 반환을 해준다는 의미 
const sum3 = (num1, num2) => num1+num2 //이렇게 해도됨

console.log(sum1(1,2))
console.log(sum2(1,2))
console.log(sum3(1,2))

//객체 object
const me = {
    name : '보경',
    age : 23,
    say : () => {
        console.log('안녕하세요')
        console.log(this.age) //function으로 선언한 함수에서만 this가 동작
    },
    say2 : function() {
        console.log('hihi')
        console.log(this.age)
    }
}

console.log(me.name)
console.log(me.age)
me.say()
me.say2()
console.log(me)

const profile = (my) => {
    console.log(`${my.name}의 나이는 ${my.age}입니다`)
}
profile(me)

const profile2 = ({name, age}) => { //객체의 비구조화할당
    console.log(`${name}의 나이는 ${age}입니다`)
}
profile2(me)

const sample = { //key값에 공백이 있는 경우
    'key with space' : true
}
