
const lowerCaseStr = str => str => str.toLowerCase();

const sortAlphabetically = (str, nextStr) => {
    if (str < nextStr) {
        return -1;
    } else if (str > nextStr){
        return 1;
    }

    return 0;
};


function lowerCaseAndSort(arrOfStr) {
    // if (!Array.isArray(arrOfStr) || arrOfStr.Any(str => typeof str === 'string')){
    //     throw new Error('Data must be an array of strings!')
    // }

    return arrOfStr
    .map(lowerCaseStr)
    .sort(sortAlphabetically);
}

export default lowerCaseAndSort;