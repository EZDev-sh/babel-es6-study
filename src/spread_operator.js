// let years = [2001, 2002, 2003, 2004]
// let yearsCp = [...years]

// console.log(yearsCp)

// let koeraHistory = {
//     liberate: 1945,
//     625: 1950
// }

// let history = {
//     worldWar1: 1924,
//     worldWar2: 1945,
//     ...koeraHistory
// }

// console. log(history)

let defaultAddress = {
    country: "South Korea",
    city: "Seoul"    
}

let address2 = {
    ...defaultAddress,
    country: "United State",
}

console.log(address2)