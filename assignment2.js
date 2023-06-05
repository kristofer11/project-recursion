// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

const arr1 = [10, 7, 8, 9, 1, 5];
const arr2 = [10, 7, 8, 9, 1, 5, 3, 2, 4, 6];
const arr3 = [10, 7, 8, 9, 1, 5, 3, 2, 4, 6, 11, 12, 13, 14, 15, 16, 17, 18, 19];

const merge = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}

const mergeSort = (arr) => {
    if (arr.length === 0) {
        return 'You must enter an array (not empty)'
    }
    if (arr.length === 1) {
        return arr;
    }

    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
console.log(mergeSort(arr3));