const defaultValue = [
    {
        year : 2000,
        data: "ES6"
    },
    {
        year : 2001,
        data: "js"
    },
    {
        year : 2002,
        data: "python"
    },
    {
        year : 2003,
        data: "swift"
    },
    {
        year : 2004,
        data: "java"
    },
    {
        year : 2005,
        data: "react"
    },
]

// 파라미터의 값이 아무것도 없을때 기본적으로 사용되는 값을 주기위해
function printYears(years = defaultValue) {
    console.log(years)
}

printYears()