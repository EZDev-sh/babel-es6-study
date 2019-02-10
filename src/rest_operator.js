// 자주 사용하지는 않지만 알아두자

// 과거에 사용하던 방법 (값만 출력되는 것이 아니라 객체 형식을 출력이 된다.)
// function printYears(years) {
//     console.log(arguments)
// }

function printYears(...years) {
    console.log(years)
}

printYears(2000, 2001, 2002, 2003, 2004)