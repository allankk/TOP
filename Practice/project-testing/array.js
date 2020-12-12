
function analyze(array) {
    const object = {};

    const findMin = (array) => {
        let currentMin = array[0];
        array.forEach(element => {
            if (element < currentMin) {
                currentMin = element;
            }
        })

        object.min = currentMin;
    }

    const findMax = (array) => {
        let currentMax = array[0];
        array.forEach(element => {
            if (element > currentMax) {
                currentMax = element;
            }
        })

        object.max = currentMax;
    }

    const findAverage = (array) => {
        let totalSum = 0;

        array.forEach(element => {
            totalSum += element;
        })

        object.average = Math.round(totalSum / array.length);
    } 

    const findLength = (array) => {
        object.length = array.length;
    }

    findAverage(array);
    findMin(array);
    findMax(array);
    findLength(array);

    return object;
}


module.exports = { analyze }