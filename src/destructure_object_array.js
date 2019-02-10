const address = {
    country: 'South Korea',
    city: 'Seoul',
    street: 'Hongje',
    str_num: 141,
    postcode: '03360'
}

// 객체 비구조화, Object Destructure
const country = 'Japan'
const city = 'Tokyo'

const { country: nextCountry, city: nextCity } = address
console.log(`${nextCountry}, ${nextCity}`)

// 배열 비구조화, Array Destructure
const [firstArr, secondArr, thirdArr] = ['Japan', 'South Korea', 'America']
console.log(firstArr)

// 객체 리터럴, Object Literal
function getAddress(country, city, street) {
    const myAddress = {country, city, street}
    console.log(myAddress)
}

getAddress('South Korea', 'Seoul', 'Hongje')