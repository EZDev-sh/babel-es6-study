// javascript callback 지옥을 해결해줌
// 가장 중요하게 사용되고 있는듯?

function resolvePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done!') // 반환되는 값!
        }, 1000)
    })
}

// async로 만들어줘야 await를 사용할 수 있따
async function getPromise1() {
    const result = await resolvePromise() // 호출된 함수가 끝날때 까지 기다린다.
    console.log(result)
    await resolvePromise()
    console.log('test')
}

getPromise1()