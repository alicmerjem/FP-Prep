// TASK 4: QUICKSORT
// write a recursive quicksort function for an array of numbers

function quickSort(arr) {
    if (arr.length < 2) {
        return arr; // base case
    } else {
        const pivot = arr[0];

        const smaller = arr.slice(1).filter(x => x < pivot);
        const greaterEqual = arr.slice(1).filter(x => x >= pivot);

        return [...quickSort(smaller), pivot, ...quickSort(greaterEqual)];
    }
}

console.log(quickSort(22, 9, 60, 12, 4, 56));