

const list = [
    {
        id: 1
    }, 
    {
        id: 2
    }, 
    {
        id: 3
    }, 
    {
        id: 4
    },
    {
        id: 5
    }, 
    {
        id: 6
    },
    {
        id: 7
    }, 
    {
        id: 8
    }
];

const NUMBER = 4;

let arrList = [...list];
let randList = [];

function iterate(oldArray, newArray, i) {
    let randomIndex = Math.floor(Math.random() * oldArray.length);

    newArray.push(arrList[randomIndex]);
    oldArray.splice(randomIndex, 1);

    if (i <= 1) {
        return
    } else {
        i = i - 1;
        iterate(oldArray, newArray, i);
    }
}

iterate(arrList, randList, NUMBER);

console.log('OLD LIST');
console.log(arrList);
console.log('-----------');
console.log('NEW LIST');
console.log(randList);
console.log('-----------');
