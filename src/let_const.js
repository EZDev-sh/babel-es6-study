// var => 변하는 것
// let => 변하는 것
// const => 변하지 않는 것

// hoisting
// if(true) {
//     var myId = 'ezdev'
// }
// console.log(myId)
// 지역변수의 범위를 넘어섰지만 실행이 되는것

// hoisting 방지
// if(true) {
//     let myId2 = 'ezdev'
// }
// console.log(myId2)

// const 객체 혹은 배열은 수정이 가능하다 하지만 형태 까지는 바꿀수 없다.
const fruit = {}
fruit.first = 'apple'
console.log(fruit)

const arr = [0, 1, 2]
arr[0] = 5
console.log(arr)