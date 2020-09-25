// opdracht A

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan = (superheroes) => superheroes.find((element) => element.name === 'Spiderman');

console.log(findSpiderMan(superheroes))

//opdracht B

const doubleArrayValues = (array) => array.map(element => element * 2);

doubleArrayValues([1, 2, 3]);
// result should be [2, 4, 6]

console.log(doubleArrayValues([1, 2, 3]));

//opdracht C

const containsNumberBiggerThan10 = (array) => array.some(element => element > 10);

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));

containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
// result should be true

console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));

containsNumberBiggerThan10([1, 2, 1, 2, 1, 2])
// result should be false

//opdracht D

const isItalyInTheGreat7 = (array) => array.includes('Italy');

isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'])
// result should be true

console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']))

//opdracht E

const tenfold = function (array) {
    let multiplyArrayByTen = [];
    array.forEach(element => multiplyArrayByTen.push(element * 10));
    return multiplyArrayByTen;
}

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

//opdracht F 

const isBelow100 = (array) => array.every(element => element < 100);

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false

//opdracht G - bonus 
const bigSum = function (array) {
    let sumItTogether = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(sumItTogether);
}
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
    // result should be 1118
