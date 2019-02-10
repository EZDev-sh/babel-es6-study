const years = [
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

// arrow function X
// const result = years.filter(function(data) {
//     return data.year > 2000
// })

// arrow function O
const result = years.filter((data) => data.year > 2000)

console.log(result)