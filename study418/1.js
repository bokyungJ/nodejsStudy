//변수선언
let i=100
console.log(i)
i=200
console.log(i)

//상수선언
const k=100
console.log(k)
//k=2
console.log(k)

//Truthy and Falsy
//null, undefined -> Falsy한 값 : + 0, '', NaN 
//이 다섯가지 외에는 모두 Truthy한 값
const friend=null //값이 없음, 값이 비어있음
let criminal
console.log(criminal) //undefined 아직 정의x

const add = (a,b) =>{
    return a+b
}
console.log(add(a=1)) //NaN값

//논리연산자
console.log(1 || false) //1
console.log(false || 1) //1
console.log("aaa" || false) //aaa
console.log(true || "aaa") //true

console.log(1 && false) //false
console.log(false && 1) //false
console.log("aaa" && false) //false
console.log(true && "aaa") //aaa

//비교연산자
console.log('1'==1) //true
console.log('1'===1) //false

//백틱?
const name='보경'
console.log('나의 이름은 '+name+'입니다') //이렇게 안해도됨
console.log(`나의 이름은 ${name}입니다`)

//삼항연산자 -> 조건식 ? true:false
const isLoaded = false
console.log(isLoaded? '로딩중':'화면을 보여줌')

