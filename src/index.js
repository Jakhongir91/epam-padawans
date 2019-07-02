/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

        let array = decrementIndexes(preferences);

        let count = 0;

        for (let i=0; i<array.length; i++) {
            let firstSpichoneey = array[i];
            let secondSpichoneey = array[firstSpichoneey];
            let thirdSpichoneey = array[secondSpichoneey];
            let fourthSpichoneey = array[thirdSpichoneey];

            if (firstSpichoneey === fourthSpichoneey && (firstSpichoneey !== secondSpichoneey && secondSpichoneey !== thirdSpichoneey)) {
                count ++;

                removeValuesFromArray(array, firstSpichoneey);
                removeValuesFromArray(array, secondSpichoneey);
                removeValuesFromArray(array, thirdSpichoneey);

                for (let i=0; i<array.length; i++) {
                    array[i] = array[i] - 3;
                }
            }
        }

        return count;




    // getLoveTrianglesCount([2, 3, 1, 5, 6, 4, 2, 3, 1, 5, 6, 4, 2, 3, 1, 5, 6, 4]);
};

function removeValuesFromArray(array, value) {
    let index = array.indexOf(value);
    while (index !== -1) {
        array.splice(index, 1);
        index = array.indexOf(value);
    }
}

function decrementIndexes(array) {
    for (let i=0; i<array.length; i++) {
        array[i] = array[i] - 1;
    }

    return array;
}
