/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

    let triangles = [];
    let array = decrementIndexes(preferences);

    let count = 0;

    for (let i=0; i<array.length; i++) {
        let firstSpichoneey = array[i];
        let secondSpichoneey = array[firstSpichoneey];
        let thirdSpichoneey = array[secondSpichoneey];
        let fourthSpichoneey = array[thirdSpichoneey];

        if (firstSpichoneey === fourthSpichoneey && (firstSpichoneey !== secondSpichoneey && secondSpichoneey !== thirdSpichoneey)) {
            let triangle = [];
            triangle.push(firstSpichoneey);
            triangle.push(secondSpichoneey);
            triangle.push(thirdSpichoneey);

            triangle.sort(function(a, b) {
                return a - b;
            });

            if (isNewTriangle(triangles, triangle)) {
                count ++;

                triangles.push(triangle);
            }
        }
    }

    return count;
};

/**
 * Привести идексы к удобному для работы с массивами виду
 *
 * @param array
 * @returns {*}
 */
function decrementIndexes(array) {
    for (let i=0; i<array.length; i++) {
        array[i] = array[i] - 1;
    }

    return array;
}

/**
 * Проверяет встречался ли ранее полученный треугольник
 *
 * @param triangles
 * @param triangle
 * @returns {boolean}
 */
function isNewTriangle(triangles, triangle) {
    for (let i=0; i<triangles.length; i++) {
        if (triangles[i].length != triangle.length) {
            continue;
        }

        if (equalArrays(triangles[i], triangle)) {
            return false;
        }
    }

    return true;
}

/**
 * Проверяет равны ли два массива
 *
 * @param array1
 * @param array2
 * @returns {boolean}
 */
function equalArrays(array1, array2) {
    for(let j=0; j<array1.length; j++) {
        if (array1[j] != array2[j]) {
            return false;
        }
    }

    return true;
}