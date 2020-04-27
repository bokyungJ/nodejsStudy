//async await

const sleep2 = ms =>{ //new Promise : 잠깐 대기!
   new Promise(resolve=>{
       setTimeout(() => {
           
       }, timeout);
   })
}

const sleep = ms =>{
    return new Promise(resolve => setTimeout(resolve, ms))
}

const process = async()=>{ //장점 : 간편, 1.db에서 긁어올때, 2.data를 가공해서 보내줄때
    console.log('hi')
    await sleep(1000) //promise를 반환하는 함수 앞에 await붙이면 then을 안쓰고 가능
    console.log('hihi')
    await sleep(1000)
    console.log('hihihi')
}

process()

//