//1. 객체 생성자

/* 이렇게 하면 안됨 -> 왜인지는 모름
const Animal=(type, name, sound)=>{
    this.type=type
    this.name=name
    this.sound=sound
    this.say=()=>{console.log(this.sound)}
}

const dog = new Animal('개','멍멍이','멍멍')
dog.say()*/


function Animal(type,name, sound){
    this.type=type
    this.name=name
    this.sound=sound
    this.say=()=>{console.log(this.sound)}
}

const dog = new Animal('개','멍멍이','멍멍')
dog.say()

//2. 프로토타입 -> 몰라도 될거 같음
function Animal2(type, name, sound){
    this.type=type
    this.name=name
    this.sound=sound
}
Animal2.prototype.say=function(){ //.prototype.원하는키=코드
    console.log(this.sound)
}
Animal2.prototype.sharedValue=1

const cat = new Animal2('고양이','야옹이','야옹')
cat.say()
console.log(cat.sharedValue)

//3. 객체 생성자 상속 -> call
function Dog(name, sound){ 
    Animal2.call(this,'개',name, sound)
}
Dog.prototype = Animal2.prototype

const dog2=new Dog('멍멍이', '멍멍')
dog2.say()

//4. 클래스
class Animal3{
    constructor(type, name, sound){
        this.type=type
        this.name = name
        this.sound = sound
    }
    say(){
        console.log(this.sound)
    }
}

const dog3=new Animal3('개', '멍멍이', '멍멍')
dog3.say()

// 클래스 상속
class Doggy extends Animal3{
    constructor(name,sound){
        super('개', name, sound)
    }
}
const dog4=new Doggy('멍멍이', '멍멍')
dog4.say()

//연습
class Food{
    constructor(name){
        this.name=name
        this.brands=[]
    }
    addBrand(brand){
        this.brands.push(brand)
    }
    print(){
        console.log(`${this.name}을/를 파는 음식점들:`)
        console.log(this.brands.join(', '))
    }
}
const pizza = new Food('피자')
pizza.addBrand('피자헛')
pizza.addBrand('도미노피자')
pizza.print()