let years = [2001, 2002, 2003]

// 배열안에 들어 있는 값이 나오게 됩니다. 현재는 node에서도 된다.
for (let year of years) {
    console.log(year)
}

// 배열의 방 번호가 나오게 됩니다. (type => string) 그래서 잘 사용 안한다.
for(let year in years) {
    console.log(year)
}