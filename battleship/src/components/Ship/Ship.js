
// creates an array of coordinates for ship parts.
// function createShipArray(length, coords, isVertical) {
//     let coordArr = [];

//     coordArr.push([coords[0], coords[1]]);

//     for(let i = 1; i < length; i++) {
//         if (isVertical) {
//             coordArr.push([coords[0] + i, coords[1]]);
//         } else {
//             coordArr.push([coords[0], coords[1] + i]);
//         }
//     };

//     return coordArr;
// }

// creates array of positions hit. initiate with 0 (not hit)
function createPositionsArray(length) {
    let posArray = [];

    for (let i = 0; i < length; i ++) {
        posArray.push(0);
    }

    return posArray;
}

// finds the correct index of array;
function findIndex(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == element[0] && array[i][1] == element[1]) {
            return i;
        } 
    }
}


const Ship = ( length, coordArr ) => {
    const positionsHit = createPositionsArray(length);

    const hit = (coord) => {
        // find the correct index
        let posIndex = findIndex(coordArr, coord);

        positionsHit[posIndex] = 1;
    }

    const getPositionsHit = () => {
        return positionsHit;
    }

    const isSunk = () => {
        if (positionsHit.includes(0)) {
            return false;
        } else {
            return true;
        }
    };

    return {
        hit,
        getPositionsHit,
        isSunk
    }
}

export { Ship };