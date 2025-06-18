// DIVIDE AND CONQUER - QUICKSORT
// sort an array by recursively partitioning around a pivot

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const [pivot, ...rest] = arr;

    const left = rest.filter(x => x < pivot);
    const right = rest.filter(x => x >= pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// EXPLANATION
// if the array has less than 2 elements, its already sorted
// otherwise:
// pick pivot (here it is the first element)
// split the rest of the array into 2 parts:
// left - elements less than pivot
// right - elements greater than or equal to the pivot
// recursively sort left and right
// combine