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

const Ship = ( length, coordArray ) => {
    const positionsHit = createPositionsArray(length);
    const coordArr = [...coordArray];

    const hit = (coord) => {
        // find the correct index.
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

    const isPartHit = (coord) => {
        let posIndex = findIndex(coordArr, coord);

        if (positionsHit[posIndex]) {
            return true;
        } else {
            return false;
        }
    }

    return {
        hit,
        getPositionsHit,
        isSunk,
        isPartHit
    }
}

export default Ship;